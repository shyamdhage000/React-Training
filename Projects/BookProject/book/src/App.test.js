import {fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import ReactDom from 'react-dom';
import BookCard from './BookCard';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders  App.js without crashing',()=>{
  const div=document.createElement('div');
  ReactDom.render(<App />,div);
});

test('Renders  BookCard.js without crashing',()=>{
  const div=document.createElement('div');
  ReactDom.render(<BookCard />,div);
});


test('button is rendered',()=>{
  render(<App />)
 
  const button=screen.getByRole('button')
  expect(button).toBeInTheDocument()
})

test('button has background color as darkgray',()=>{
  render(<App />)
  
  const colorbutton=screen.getByRole('button')
  expect(colorbutton).toHaveStyle({backgroundColor:'secondary'})
})

test('Searchbar  is rendered',()=>{
  render(<App />)
 
  const inputNode = screen.getByPlaceholderText('Book Search')
  expect(inputNode).toBeInTheDocument()
})


test('MaxResult field  is rendered',()=>{
  render(<App />)

  const res=screen.getByLabelText('Max Results')
  expect(res).toBeInTheDocument()
})

test('StartIndex  field  is rendered',()=>{
  render(<App />)
 
  const res=screen.getByLabelText('Start Index')
  expect(res).toBeInTheDocument()
})

test('button has text as More info',()=>{
  render(<BookCard />)
  //find an element with role of button
  const colorbutton=screen.getByRole('button')
  expect(colorbutton.textContent).toBe('More info')
})

test('Renders card Correctly', ()=>{
  render(<BookCard />)
  const element = screen.getByTestId('card')
  expect(element).toHaveTextContent('Title')
})

// test('card has button more info', ()=>{
//   render(<BookCard />)
//   const element = screen.getByTestId('card')
//   expect(element).toHaveButton('More Info')
// })

