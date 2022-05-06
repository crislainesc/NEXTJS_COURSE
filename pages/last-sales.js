import {useEffect, useState} from 'react';
import useSWR from 'swr';

function LastSalesPage(props) {
    const [sales, setSales] = useState(props.sales);
    // const [isLoading, setIsLoading] = useState(false);

    const {data, error} = useSWR(
        'https://nextjs-course-21610-default-rtdb.firebaseio.com/sales.json',
        (url) => fetch(url).then((res) => res.json())
    );

    useEffect(() => {
        if (data) {
            const loadedSales = [];

            for (const key in data) {
                const loadedSale = {
                    id: key,
                    userName: data[key].userName,
                    volume: data[key].volume,
                };

                loadedSales.push(loadedSale);
            }

            setSales(loadedSales);
        }
    }, [data]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(
    //         'https://nextjs-course-21610-default-rtdb.firebaseio.com/sales.json'
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const loadedSales = [];

    //             for (const key in data) {
    //                 const loadedSale = {
    //                     id: key,
    //                     userName: data[key].userName,
    //                     volume: data[key].volume,
    //                 };

    //                 loadedSales.push(loadedSale);
    //             }

    //             setSales(loadedSales);
    //             setIsLoading(false);
    //         });
    // }, []);

    if (error) {
        return <p>Failed to load.</p>;
    }

    if (!data && !sales) {
        return <p>Loading...</p>;
    }

    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>
                    {sale.userName} - ${sale.volume}
                </li>
            ))}
        </ul>
    );
}

export async function getStaticProps() {
    const response = await fetch(
        'https://nextjs-course-21610-default-rtdb.firebaseio.com/sales.json'
    );

    const data = await response.json();

    const loadedSales = [];

    for (const key in data) {
        const loadedSale = {
            id: key,
            userName: data[key].userName,
            volume: data[key].volume,
        };

        loadedSales.push(loadedSale);
    }

    return {props: {sales: loadedSales}, revalidate: 10};
}

export default LastSalesPage;
