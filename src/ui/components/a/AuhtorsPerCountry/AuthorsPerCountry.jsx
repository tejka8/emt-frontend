import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import useAuthor from "../../../../hooks/useAuthor.js";

const AuthorsPerCountry = () => {
    const { data, loading } = useAuthor();

    if (loading) return <p>Loading chart...</p>;

    return (
        <div>
            <h2>Authors per Country</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="country" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="authors" fill="#1976d2" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AuthorsPerCountry;
