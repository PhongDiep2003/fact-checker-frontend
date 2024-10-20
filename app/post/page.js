
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostPage() {
    const router = useRouter();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('postData');
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                console.log('Loaded post data:', parsedData);
                setPost(parsedData.slice(1)); // Ignore the first element with success:true
            } catch (error) {
                console.error('Error parsing post data:', error);
                router.push('/');
            }
        } else {
            router.push('/');
        }
    }, [router]);

    if (!post) return <div style={styles.loading}>Loading...</div>;

    return (
        <div style={styles.container}>
            <div style={styles.innerContainer}>
                <h1 style={styles.title}>Post Claims and Sources</h1>

                <div style={styles.grid}>
                    {post.map((claimData, index) => (
                        <div key={index} style={styles.claim}>
                            <div style={styles.claimHeader}>
                                <div style={styles.claimIndex}>{index + 1}</div>
                                <div>
                                    <p style={styles.claimText}>{claimData.claim}</p>
                                    <div style={styles.rating}>
                                        Rating: <span style={styles.bold}>{claimData.rating}</span>
                                    </div>
                                    <div style={styles.sources}>
                                        <p>Sources:</p>
                                        <ol style={styles.sourceList}>
                                            {claimData.sources.map((src, i) => (
                                                <li key={i} style={styles.sourceItem}>
                                                    <a
                                                        href={src}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={styles.sourceLink}
                                                    >
                                                        {src}
                                                    </a>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#1A2B44',
        color: '#FFFFFF',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        maxWidth: '1200px',
        width: '100%',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        textAlign: 'center',
        borderBottom: '2px solid #FFFFFF',
        paddingBottom: '1rem',
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    claim: {
        backgroundColor: '#FFFFFF',
        color: '#1A2B44',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    claimHeader: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
    },
    claimIndex: {
        fontSize: '2rem',
        fontWeight: 'bold',
        backgroundColor: '#1A2B44',
        color: '#FFFFFF',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
    },
    claimText: {
        fontSize: '1.2rem',
        marginBottom: '1rem',
    },
    rating: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    bold: {
        fontWeight: 'bold',
    },
    sources: {
        marginTop: '1rem',
    },
    sourceList: {
        paddingLeft: '1.5rem',
    },
    sourceItem: {
        marginBottom: '0.5rem',
    },
    sourceLink: {
        textDecoration: 'underline',
        color: '#1A2B44',
    },
    loading: {
        textAlign: 'center',
        fontSize: '1.5rem',
    },
};