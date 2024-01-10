import React, { useEffect, useState } from 'react';
import './ConnectionHealth.css';

const API_URL = import.meta.env.VITE_API_BASE_URL;
const HEALTH_CHECK_INTERVAL = import.meta.env.VITE_HEALTH_CHECK_INTERVAL;

const ConnectionHealth: React.FC = () => {
    const [isConnected, setIsConnected] = useState<boolean | null>(null);

    useEffect(() => {
        const checkApiHealth = async () => {
            try {
                const response = await fetch(`${API_URL}/health-check`);
                console.log(response);
                setIsConnected(response.status === 200);
            } catch (error) {
                setIsConnected(false);
            }
        };

        const intervalId = setInterval(() => {
            checkApiHealth();
        }, HEALTH_CHECK_INTERVAL);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            {isConnected !== null ? (
                <div>
                    <div className={`connection ${isConnected ? 'connected' : 'disconnected'}`} />
                    <span>{isConnected ? 'Connected' : 'Disconnected!'}</span>
                </div>
            ) : (
                <span>Checking...</span>
            )}
        </div>
    );
};

export default ConnectionHealth;