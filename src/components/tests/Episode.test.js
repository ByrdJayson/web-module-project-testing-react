import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { queryByText, render, screen } from '@testing-library/react';
import Episode from './../Episode';


const ep = {
    id: 5,
    image: '/local',
    name: '',
    season: 1,
    number: 1,
    summary: 'test',
    runtime: 45
}

const epImg = {
    id: 5,
    image: null,
    name: '',
    season: 1,
    number: 1,
    summary: 'test',
    runtime: 45
}

test("renders without error", () => {
    render(<Episode episode={ep}/>);
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={ep}/>);
    const summary = screen.queryByText(/test/i);
    expect(summary).toBeInTheDocument();
    expect(summary).not.toBeFalsy();
    expect(summary).toHaveTextContent("test");
    });

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={epImg}/>);
    const img = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(img).toBeInTheDocument();
    expect(img).not.toBeFalsy();
    

});
