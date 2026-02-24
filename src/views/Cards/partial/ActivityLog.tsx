const ActivityLog = () => {
    return (
        <div>
            <div className="f-14 mb-4">Recent Card Activity</div>
            <div className="">
                <ul className="activity-list">
                    <li className="activity-item">
                        <img
                            className="activity-avatar"
                            src="https://i.pravatar.cc/88?u=admin"
                            alt="Admin avatar"
                        />
                        <div className="activity-content f-14">
                            <p className="activity-text f-14">
                                <strong>Admin Maharjan</strong>{' '}
                                <strong>
                                    <em>activated</em>
                                </strong>{' '}
                                the “EBA – Smart Health Qualcare”
                            </p>
                            <span className="activity-date">Jun 20 , 2025</span>
                        </div>
                    </li>

                    <li className="activity-item">
                        <img
                            className="activity-avatar"
                            src="https://i.pravatar.cc/88?u=admin"
                            alt="Admin avatar"
                        />
                        <div className="activity-content f-14">
                            <p className="activity-text f-14">
                                <strong>Admin Maharjan</strong>{' '}
                                <strong>
                                    <em>deactivated</em>
                                </strong>{' '}
                                the “EBA – Smart Health Qualcare”
                            </p>
                            <span className="activity-date">Jun 20 , 2025</span>
                        </div>
                    </li>

                    <li className="activity-item">
                        <img
                            className="activity-avatar"
                            src="https://i.pravatar.cc/88?u=john"
                            alt="John Kumar Shrestha avatar"
                        />
                        <div className="activity-content f-14">
                            <p className="activity-text f-14">
                                <strong>John Kumar Shrestha</strong>{' '}
                                <strong>
                                    <em>assigned</em>
                                </strong>{' '}
                                the “Solistic Dental ” to “EBA – Smart Health Qualcare”
                            </p>
                            <span className="activity-date">Jun 20 , 2025</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ActivityLog;
