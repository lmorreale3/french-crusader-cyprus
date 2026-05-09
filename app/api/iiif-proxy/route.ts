import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url")
  
  if (!url) {
    return NextResponse.json(
      { error: "Missing url parameter" },
      { status: 400 }
    )
  }

  try {
    // Validate the URL is from an allowed domain
    const parsedUrl = new URL(url)
    const allowedDomains = [
      "fromthepage.com",
      "beta.fromthepage.com",
      "gallica.bnf.fr",
      "iiif.bodleian.ox.ac.uk",
      "digi.vatlib.it",
      "iiif.lib.harvard.edu",
      "iiif.archive.org",
      "api.digitale-sammlungen.de",
    ]
    
    const isAllowed = allowedDomains.some(domain => 
      parsedUrl.hostname.includes(domain)
    )
    
    if (!isAllowed) {
      return NextResponse.json(
        { error: "Domain not allowed" },
        { status: 403 }
      )
    }

    const response = await fetch(url, {
      headers: {
        "Accept": "application/ld+json, application/json",
        "User-Agent": "French-Texts-Crusader-Cyprus/1.0",
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    })
  } catch (error) {
    console.error("IIIF proxy error:", error)
    return NextResponse.json(
      { error: "Failed to fetch IIIF manifest" },
      { status: 500 }
    )
  }
}
