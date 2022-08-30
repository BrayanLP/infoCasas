import { useEffect, useState } from "react";
import styled from "styled-components";
import Add from "../components/add";
import Item from "../components/item";
import Layout from "../components/layout";
import Title from "../components/title";

const Cont = styled.div`
  margin-top: 1rem;
`;
const Subtitle = styled.p`
  margin: 2rem 1rem 1rem 1rem;
  color: #666;
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.span`
  cursor: pointer;
`;
const InputSearch = styled.input`
  background: white;
  border: none;
  border-bottom: 1px solid #666;
  font-size: 18px;
  height: 35px;
  outline: none;
`;
const Inline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Index = () => {
  const [list, setList] = useState([]);
  const [info, setInfo] = useState({ title: "", completed: false });
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [complete, setComplete] = useState([]);
  const API = process.env.NEXT_PUBLIC_API;

  const getData = async () => {
    const response = await fetch(`${API}/posts?completed=false`);
    const output = await response.json();
    setList(output);
  };

  const getDataComplete = async () => {
    const response = await fetch(`${API}/posts?completed=true`);
    const output = await response.json();
    setComplete(output);
  };

  const saveData = async (title) => {
    let request = {
      method: "POST",
      body: JSON.stringify({ title: title, completed: false }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(`${API}/posts`, request);
    getData();
  };

  const updateData = async (response, edit = false) => {
    let request = {
      method: "PUT",
      body: JSON.stringify({
        title: response.title,
        completed: edit ? response.completed : !response.completed,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(`${API}/posts/${response.id}`, request);
    getData();
    getDataComplete();
    setInfo({ title: "", completed: false });
  };

  const deleteData = async (info) => {
    let request = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(`${API}/posts/${info.id}`, request);
    getData();
    getDataComplete();
  };

  const editText = (info) => {
    setInfo(info);
  };

  const getChange = (e) => {
    setInfo({ ...info, title: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      updateData(
        { title: info.title, id: info.id, completed: info.completed },
        true
      );
      setInfo({ title: "", completed: false });
    } else {
      saveData(info.title);
      setInfo({ title: "", completed: false });
    }
  };

  const sortDefault = (orden) => {
    const sortList = [...list].sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
    const sortComplete = [...complete].sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
    if (orden) {
      setList(sortList.reverse());
      setComplete(sortComplete.reverse());
    } else {
      setList(sortList);
      setComplete(sortComplete);
    }
    setSort(!orden);
  };

  const onChangeFilter = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getData();
    getDataComplete();
  }, []);

  return (
    <>
      <Layout>
        <div className="container">
          <Inline>
            <Title>Todo List</Title>
            <InputSearch
              type="search"
              placeholder="Buscar"
              value={search}
              onChange={onChangeFilter}
            />
          </Inline>
          <Cont>
            <Subtitle>
              Pendiente:
              <Icon
                onClick={() => sortDefault(sort)}
                className="cursor material-symbols-outlined"
              >
                sort_by_alpha
              </Icon>{" "}
            </Subtitle>

            {list
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((val, key, arr) => {
                return (
                  <Item
                    key={key}
                    data={val}
                    editText={editText}
                    updateData={(val) => updateData(val)}
                    deleteData={deleteData}
                    completed={false}
                  ></Item>
                );
              })}

            <Add
              title={info.title}
              onSubmit={onSubmit}
              getChange={getChange}
            ></Add>

            <Subtitle>Completados:</Subtitle>

            {complete
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((val, key) => {
                return (
                  <Item
                    key={key}
                    data={val}
                    editText={editText}
                    updateData={(val) => updateData(val)}
                    deleteData={deleteData}
                    completed={true}
                  ></Item>
                );
              })}
          </Cont>
        </div>
      </Layout>
    </>
  );
};

export default Index;
