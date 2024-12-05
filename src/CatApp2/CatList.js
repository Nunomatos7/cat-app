import React, { useState } from 'react';
import { useFetchCatsQuery } from '../redux/rtkApiSLice';
import styled from 'styled-components';
import Spinner from './Loader';

const CatList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [pendingLimit, setPendingLimit] = useState(10);
  const [order, setOrder] = useState('asc');

  const { data, error, isLoading } = useFetchCatsQuery({ page, limit, order });

  const applyLimit = () => {
    setLimit(pendingLimit);
    setPage(1);
  };
  

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <h1>Cat Gallery</h1>
      <Controls>
        <label>
          Order:
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <ResultsPerPage>
          <label>Results per page:</label>
          <ResultsInput>
            <input
              type="number"
              value={pendingLimit}
              min="1"
              max="50"
              onChange={(e) => setPendingLimit(parseInt(e.target.value))}
            />
            <ApplyButton onClick={applyLimit} disabled={pendingLimit < 1 || pendingLimit > 50}>
              Apply
            </ApplyButton>

          </ResultsInput>
        </ResultsPerPage>
      </Controls>
      <Grid>
        {data?.map((cat) => (
          <Card key={cat.id}>
            <img src={cat.url} alt="Cat" />
          </Card>
        ))}
      </Grid>
      <Pagination>
        <Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
      </Pagination>
    </Container>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .info {
    padding: 15px;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
  }

  .actions {
    margin-top: auto;
    padding: 10px;
    background: #f9f9f9;
    width: 100%;
    text-align: center;
    border-top: 1px solid #eee;

    button {
      margin: 0 5px;
      padding: 8px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
      color: #fff;
      background: linear-gradient(45deg, #6a11cb, #2575fc);
      border: none;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: linear-gradient(45deg, #2575fc, #6a11cb);
      }

      &:disabled {
        background: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Controls = styled.div`
  display: flex;
  gap: 20px;

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #333;
  }

  select,
  input {
    padding: 5px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  input {
    width: 60px;
    text-align: center;
  }
`;

const Pagination = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ResultsPerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultsInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const ApplyButton = styled.button`
  padding: 5px 10px;
  font-size: 0.9rem;
  color: #fff;
  background: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #45a049;
  }
`;

export default CatList;
