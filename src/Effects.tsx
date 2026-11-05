import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState<string>('-1');

    useEffect(() => {
        // При смене источника сбрасываем сообщение
        setMessage('-1');

        const handleMessage = (newMessage: string) => {
            setMessage(newMessage);
        };

        subscribe(props.sourceId, handleMessage);

        return () => {
            unsubscribe(props.sourceId, handleMessage);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
