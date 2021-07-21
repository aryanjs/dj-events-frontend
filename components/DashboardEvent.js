import Link from 'next/link'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'

import styles from '@/styles/DashboardEvent.module.scss'

export default function DashboardEvent({ evt, deleteHandler }) {
    return (
        <div className={styles.event}>
            <h4>
                <Link href={`/events/${evt.slug}`}>
                    <a> {evt.name}</a>
                </Link>
            </h4>

            <Link href={`/events/edit/${evt.id}`}>
                <a className={styles.edit}>
                    <FaPencilAlt /> <span>edit event</span>
                </a>
            </Link>

            <button className={styles.delete} onClick={() => deleteHandler(evt.id)}>
                <FaTimes /> <span>delete event</span>
            </button>
        </div>
    )
}
