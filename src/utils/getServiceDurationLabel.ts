export const formatDate = (date?: string | Date) => {
    if (!date) return 'Present';

    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });
};
export const getServiceDurationLabel = (history?: {
    serviceStartDate?: string;
    serviceEndDate?: string;
}) => {
    if (!history?.serviceStartDate) return '—';

    const start = new Date(history.serviceStartDate);
    const today = new Date();

    start.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (start > today) {
        return `Upcoming (Starts on ${formatDate(history.serviceStartDate)})`;
    }

    if (!history.serviceEndDate) {
        return `${formatDate(history.serviceStartDate)} – Present`;
    }

    return `${formatDate(history.serviceStartDate)} – ${formatDate(history.serviceEndDate)}`;
};
