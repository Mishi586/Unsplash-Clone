import api from '../../../../utils/api';
import React, { useEffect, useState, useRef } from 'react';
import { MainContainer } from '../../../../global/styles/globalStyle';
import '../imageCollection/ImageCollection.scss';

const ImageCollection = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const loaderDiv = useRef(null);

    useEffect(() => {
        api.get(`search/photos?query=office&page=${page}`)
            .then((res) => {
                setList([...list, ...res.data.results]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);

    useEffect(() => {
        if (list.length > 0) {
            let obs = new IntersectionObserver((entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            });
            obs.observe(loaderDiv.current);

            return () => {
                obs.disconnect();
            };
        }
    }, [list.length]);

    return (
        <MainContainer>
            <div className='ImageCollectionContainer'>
                {list.map(({ links }, index) => (
                    <img width={'100px'} key={links.download} src={links?.download} alt='' />
                ))}
            </div>
            <div ref={loaderDiv}></div>
        </MainContainer>
    );
};

export default ImageCollection;
