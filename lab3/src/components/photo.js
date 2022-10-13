import Link from '@mui/material/Link';

export function Image(id, url, thumbnailUrl) {
    return (
        <div key={id}><Link href={url}>{thumbnailUrl}</Link></div>
    )
}