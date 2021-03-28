export default function handler(req, res) {
  if (req.query.secret !== process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({})
  res.end('Preview mode enabled')
}
