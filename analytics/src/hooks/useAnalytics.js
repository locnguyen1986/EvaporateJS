import { useState, useEffect } from 'react'

// Mock data generators based on time range
const generateMockData = (timeRange) => {
  const multipliers = {
    '1h': { uploads: 50, data: 5, speed: 25 },
    '6h': { uploads: 280, data: 32, speed: 28 },
    '24h': { uploads: 1200, data: 150, speed: 22 },
    '7d': { uploads: 8500, data: 980, speed: 26 },
    '30d': { uploads: 35000, data: 4200, speed: 24 },
  }

  const m = multipliers[timeRange] || multipliers['24h']
  const trend = (Math.random() * 20 - 8).toFixed(1)

  // Upload volume over time
  const uploadVolumeData = []
  const points = timeRange === '1h' ? 60 : timeRange === '6h' ? 24 : timeRange === '24h' ? 24 : 7
  for (let i = 0; i < points; i++) {
    uploadVolumeData.push({
      time: timeRange === '1h' ? `${i}m` : timeRange === '6h' ? `${i * 15}m` : timeRange === '24h' ? `${i}h` : `Day ${i + 1}`,
      uploads: Math.floor(m.uploads / points * (0.5 + Math.random())),
    })
  }

  // Speed distribution
  const speedBuckets = [
    { bucket: '0-10 MB/s', count: Math.floor(m.uploads * 0.15) },
    { bucket: '10-25 MB/s', count: Math.floor(m.uploads * 0.35) },
    { bucket: '25-50 MB/s', count: Math.floor(m.uploads * 0.30) },
    { bucket: '50+ MB/s', count: Math.floor(m.uploads * 0.20) },
  ]

  // Success vs Failure
  const successCount = Math.floor(m.uploads * 0.94)
  const failCount = m.uploads - successCount

  // File size distribution
  const fileSizeDist = [
    { range: '0-10 MB', count: Math.floor(m.uploads * 0.45) },
    { range: '10-100 MB', count: Math.floor(m.uploads * 0.30) },
    { range: '100 MB-1 GB', count: Math.floor(m.uploads * 0.20) },
    { range: '>1 GB', count: Math.floor(m.uploads * 0.05) },
  ]

  // Top 10 largest uploads
  const topUploads = [
    { filename: 'backup-v2024-full.zip', size: '4.2 GB', duration: '4m 32s', speed: '156 MB/s' },
    { filename: 'video-4k-render.mov', size: '3.8 GB', duration: '5m 15s', speed: '128 MB/s' },
    { filename: 'database-dump.qcow2', size: '2.9 GB', duration: '3m 48s', speed: '134 MB/s' },
    { filename: 'application-iso.iso', size: '2.5 GB', duration: '6m 02s', speed: '87 MB/s' },
    { filename: 'archive-media.tar.gz', size: '2.1 GB', duration: '2m 55s', speed: '121 MB/s' },
    { filename: 'dataset-training.bin', size: '1.9 GB', duration: '2m 18s', speed: '145 MB/s' },
    { filename: 'vm-image-flat.vmdk', size: '1.6 GB', duration: '3m 22s', speed: '83 MB/s' },
    { filename: 'logs-archive-2024.tar', size: '1.4 GB', duration: '1m 45s', speed: '134 MB/s' },
    { filename: 'scientific-data.h5', size: '1.2 GB', duration: '1m 58s', speed: '102 MB/s' },
    { filename: 'project-bundle.tar', size: '980 MB', duration: '1m 12s', speed: '136 MB/s' },
  ]

  // File type distribution
  const fileTypes = [
    { extension: '.zip', count: 4520, totalSize: '1.2 TB' },
    { extension: '.mp4', count: 2890, totalSize: '850 GB' },
    { extension: '.tar.gz', count: 2100, totalSize: '680 GB' },
    { extension: '.iso', count: 980, totalSize: '520 GB' },
    { extension: '.mov', count: 720, totalSize: '340 GB' },
    { extension: '.bin', count: 540, totalSize: '280 GB' },
  ]

  // Top error types
  const errorTypes = [
    { type: 'Timeout', count: Math.floor(failCount * 0.35) },
    { type: 'Network Error', count: Math.floor(failCount * 0.28) },
    { type: 'Auth Failed', count: Math.floor(failCount * 0.18) },
    { type: 'S3: AccessDenied', count: Math.floor(failCount * 0.10) },
    { type: 'S3: NoSuchBucket', count: Math.floor(failCount * 0.05) },
    { type: 'S3: InvalidUpload', count: Math.floor(failCount * 0.04) },
  ]

  // Recent failures
  const recentFailures = [
    { filename: 'large-video-4k.mov', error: 'Connection timeout after 300s', time: '2 min ago' },
    { filename: 'backup-complete.zip', error: 'NetworkError: Failed to fetch', time: '15 min ago' },
    { filename: 'data-export.tar', error: 'AuthFailed: Signature mismatch', time: '1 hour ago' },
    { filename: 'iso-image.img', error: 'S3: AccessDenied - Invalid credentials', time: '2 hours ago' },
  ]

  return {
    metrics: {
      totalUploads: m.uploads,
      successRate: 94.2,
      avgSpeed: m.speed,
      totalData: m.data,
      trends: {
        uploads: parseFloat(trend),
        successRate: parseFloat((Math.random() * 10 - 2).toFixed(1)),
        speed: parseFloat((Math.random() * 15 - 5).toFixed(1)),
        data: parseFloat(trend),
      },
    },
    uploadVolume: uploadVolumeData,
    speedDistribution: speedBuckets,
    successVsFailure: [
      { name: 'Success', value: successCount },
      { name: 'Failed', value: failCount },
    ],
    fileSizeDistribution: fileSizeDist,
    topUploads,
    fileTypes,
    errorTypes,
    recentFailures,
  }
}

export const useAnalytics = (timeRange) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // Simulate API delay
    const timer = setTimeout(() => {
      setData(generateMockData(timeRange))
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [timeRange])

  return { data, loading }
}

export default useAnalytics