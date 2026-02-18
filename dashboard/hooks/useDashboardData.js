/**
 * useDashboardData hook
 * Provides mock dashboard data for the Dashboard page
 */

const generateMockRecentActivity = () => {
  const now = Date.now();
  const statuses = ['completed', 'completed', 'completed', 'completed', 'completed',
                    'completed', 'completed', 'failed', 'in-progress', 'completed'];

  const files = [
    { name: 'document.pdf', size: '2.4 MB' },
    { name: 'image.png', size: '1.8 MB' },
    { name: 'video.mp4', size: '156.2 MB' },
    { name: 'archive.zip', size: '48.5 MB' },
    { name: 'data.csv', size: '8.1 MB' },
    { name: 'photo.jpg', size: '3.2 MB' },
    { name: 'report.docx', size: '1.5 MB' },
    { name: 'backup.tar.gz', size: '234.7 MB' },
    { name: 'audio.mp3', size: '5.6 MB' },
    { name: 'spreadsheet.xlsx', size: '892 KB' }
  ];

  return files.map((file, index) => ({
    id: index + 1,
    timestamp: new Date(now - (index * 45 * 60000)).toISOString(),
    filename: file.name,
    status: statuses[index],
    fileSize: file.size
  }));
};

/**
 * Returns mock dashboard data
 * @returns {Object} Dashboard data object
 */
export const useDashboardData = () => {
  const metrics = {
    activeUploads: 3,
    completedToday: 47,
    failedUploads: 2,
    transferSpeed: '12.4 MB/s'
  };

  const systemStatus = {
    s3Connected: true,
    bucketName: 'my-uploads-bucket',
    awsRegion: 'us-east-1',
    authMethod: 'V4'
  };

  const recentActivity = generateMockRecentActivity();

  return {
    metrics,
    systemStatus,
    recentActivity
  };
};

export default useDashboardData;