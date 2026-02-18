/**
 * Dashboard Page
 * Main dashboard overview showing metrics, recent activity, and system status
 */

import { useDashboardData } from './hooks/useDashboardData.js';
import { Stat } from './components/Stat.js';
import { Card } from './components/Card.js';

/**
 * Formats a timestamp to readable date/time
 * @param {string} isoString - ISO timestamp string
 * @returns {string} Formatted date/time
 */
const formatTimestamp = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString();
};

/**
 * Creates the status icon element for activity items
 * @param {string} status - Activity status
 * @returns {string} HTML string for status icon
 */
const getStatusIcon = (status) => {
  const statusClasses = {
    'completed': 'status-icon completed',
    'failed': 'status-icon failed',
    'in-progress': 'status-icon in-progress'
  };
  return `<span class="${statusClasses[status] || 'status-icon'}"></span>`;
};

/**
 * Creates a timeline item for recent activity
 * @param {Object} activity - Activity data
 * @returns {HTMLElement} Timeline item element
 */
const createTimelineItem = (activity) => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    ${getStatusIcon(activity.status)}
    <div class="timeline-content">
      <div class="timeline-filename">${activity.filename}</div>
      <div class="timeline-meta">
        <span class="timeline-size">${activity.fileSize}</span>
        <span class="timeline-time">${formatTimestamp(activity.timestamp)}</span>
      </div>
    </div>
  `;
  return item;
};

/**
 * Creates the connection status indicator
 * @param {boolean} isConnected - Connection status
 * @returns {string} HTML string for status indicator
 */
const getConnectionStatus = (isConnected) => {
  const statusClass = isConnected ? 'status-dot connected' : 'status-dot disconnected';
  const statusText = isConnected ? 'Connected' : 'Disconnected';
  return `<div class="connection-status">
    <span class="${statusClass}"></span>
    <span>${statusText}</span>
  </div>`;
};

/**
 * Creates and renders the Dashboard page
 * @param {HTMLElement} container - Container element to render into
 */
export const Dashboard = (container) => {
  // Get dashboard data from hook
  const { metrics, systemStatus, recentActivity } = useDashboardData();

  // Clear container
  container.innerHTML = '';

  // Create main dashboard element
  const dashboard = document.createElement('div');
  dashboard.className = 'dashboard';

  // Page header
  const header = document.createElement('div');
  header.className = 'dashboard-header';
  header.innerHTML = '<h1>Dashboard</h1>';
  dashboard.appendChild(header);

  // Metrics Grid
  const metricsGrid = document.createElement('div');
  metricsGrid.className = 'metrics-grid';

  const activeUploadsStat = Stat({ label: 'Active Uploads', value: metrics.activeUploads });
  const completedTodayStat = Stat({ label: 'Completed Today', value: metrics.completedToday });
  const failedUploadsStat = Stat({ label: 'Failed Uploads', value: metrics.failedUploads });
  const transferSpeedStat = Stat({ label: 'Transfer Speed', value: metrics.transferSpeed });

  metricsGrid.appendChild(activeUploadsStat);
  metricsGrid.appendChild(completedTodayStat);
  metricsGrid.appendChild(failedUploadsStat);
  metricsGrid.appendChild(transferSpeedStat);
  dashboard.appendChild(metricsGrid);

  // Bottom section container
  const bottomSection = document.createElement('div');
  bottomSection.className = 'bottom-section';

  // Recent Activity Card
  const activityCard = Card({
    title: 'Recent Activity',
    className: 'activity-card'
  });

  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  recentActivity.forEach(activity => {
    timeline.appendChild(createTimelineItem(activity));
  });

  activityCard.querySelector('.card-body').appendChild(timeline);
  bottomSection.appendChild(activityCard);

  // System Status Card
  const statusCard = Card({
    title: 'System Status',
    className: 'status-card'
  });

  statusCard.querySelector('.card-body').innerHTML = `
    ${getConnectionStatus(systemStatus.s3Connected)}
    <div class="status-info">
      <div class="status-row">
        <span class="status-label">Bucket:</span>
        <span class="status-value">${systemStatus.bucketName}</span>
      </div>
      <div class="status-row">
        <span class="status-label">Region:</span>
        <span class="status-value">${systemStatus.awsRegion}</span>
      </div>
      <div class="status-row">
        <span class="status-label">Auth:</span>
        <span class="status-value">${systemStatus.authMethod}</span>
      </div>
    </div>
  `;
  bottomSection.appendChild(statusCard);

  dashboard.appendChild(bottomSection);
  container.appendChild(dashboard);
};

export default Dashboard;