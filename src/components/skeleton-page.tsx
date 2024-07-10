import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';

const getData = async () => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return '123456789'.split(''); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    } catch (err) {
        console.log(err);
    }
};

export default function SkeletonPage() {
    const [data, setData] = useState<string[]>();
    const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga

    useEffect(() => {
        getData().then((data) => {
            setData(data);
            setIsLoading(false); // Establecer la carga en falso después de obtener los datos
        });
    }, []);


    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 '>
            {isLoading ? <LoadingSkeleton /> :
                data?.map((item) => (
                    <Card key={item}>
                        <CardHeader className='flex-row'>
                            <img
                                src="https://github.com/shadcn.png"
                                alt='shadcn'
                                width={40}
                                height={40}
                                className='rounded-full mr-2 w-10 h-10'
                            />
                            <div>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </div>
                        </CardHeader>
                        <CardFooter className='flex justify-end items-center'>
                            <Button>Más</Button>
                        </CardFooter>
                    </Card>
                ))}
        </div>
    );
}

function LoadingSkeleton() {
    const data = '123456789'.split('');
    
    return (
        <>
            {data?.map((item) => (
                <Card key={item}>
                    <CardHeader className='flex-row'>
                        <Skeleton
                            className='rounded-full mr-2 w-10 h-10'
                        />
                        <div className='flex-col flex-grow'>
                            <Skeleton className='h-4 w-1/2 mb-2' />
                            <Skeleton className='h-3 w-full' />
                        </div>
                    </CardHeader>
                    <CardFooter className='flex justify-end items-center'>
                        <Skeleton className='h-8 w-20' />
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}