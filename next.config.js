/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com'
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com'
            },
            {
                protocol: 'https',
                hostname: 'images.vexels.com'
            },
            {
                protocol: 'https',
                hostname: 'svgrepo.com'
            },
            {
                protocol: 'https',
                hostname: 'svgsilh.com'
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org'
            }
        ]
    }
}

module.exports = nextConfig
