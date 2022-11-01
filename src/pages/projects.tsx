import { Table } from "../components/Table/index";
import { Sidebar } from "../components/Sidebar";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { GridColDef } from "@mui/x-data-grid";
import { NewAccountModal } from "../components/NewAccountModal";
import Head from 'next/head'



export default function ServiceAccounts() {
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  

  function handleOpenNewProjectModal() {
    setIsNewAccountModalOpen(true);
  }
  function handleCloseNewProjectModal() {
    setIsNewAccountModalOpen(false);
  }

  // Recebendo a resposta da api
  useEffect(() => {
    const getProjects = async () => {
      const { data: res } = await api.get("/projetos");
      setProjects(res);
    };
    getProjects();
  }, []);

  // Definindo colunas
  const columns: GridColDef[] = [
    { field: "nome", headerName: "Nome", width: 150 },
    { field: "descricao", headerName: "Descrição", width: 150 },
    { field: "observacao", headerName: "Observação", width: 200 },
    { field: "area_negocio", headerName: "Área de negócio", width: 200 },
    { field: "tipo", headerName: "Tipo de Projeto", width: 200, valueGetter: (params) =>{ 
      if (params.row.tipo == 1){
      return 'V.tal'
    }
      else{
        return'Oi'
      }
  }  },
  ];

  return (

    <div className="home">
    <Head>
      <title>Contas de serviço</title>
    </Head>
      <Sidebar />
      <div className="home-container">
        <Table
          onOpenNewProjectModal={handleOpenNewProjectModal}
          props={projects}
          columns={columns}
        />
        <NewAccountModal
          isOpen={isNewAccountModalOpen}
          onRequestClose={handleCloseNewProjectModal}
        />
      </div>
    </div>
  );
}
