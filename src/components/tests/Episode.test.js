import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


const ep = {
    id: 5,
    image: '/local',
    name: '',
    season: 1,
    number: 1,
    summary: 'LOREM IPSUM',
    runtime: 45
}

test("renders without error", () => {
    render(<Episode episode={ep}/>);
});

test("renders the summary test passed as prop", ()=>{});

test("renders default image when image is not defined", ()=>{});
