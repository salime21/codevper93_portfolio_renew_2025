import { Octokit } from '@octokit/rest';
import { useEffect, useState } from 'react';
import { FaCodeFork } from "react-icons/fa6";
import { RiUserStarFill } from "react-icons/ri";
import { MdOutlinePlayArrow } from "react-icons/md";
import { FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { HiMiniArchiveBoxArrowDown } from "react-icons/hi2";
import { datasetDevMapping } from "./_Data/datasetDevMapping";
import { Button, Card, Col, Container, Image, Modal, Row, Alert, Badge, ButtonGroup, Form } from "react-bootstrap";

import uno from "./Assets/Imgs/tools/1.png";
import dos from "./Assets/Imgs/tools/2.png";
import tres from "./Assets/Imgs/tools/3.png";
import seis from "./Assets/Imgs/tools/6.png";
import ocho from "./Assets/Imgs/tools/8.png";
import cinco from "./Assets/Imgs/tools/5.png";
import siete from "./Assets/Imgs/tools/7.png";
import nueve from "./Assets/Imgs/tools/9.png";
import diez from "./Assets/Imgs/tools/10.png";
import once from "./Assets/Imgs/tools/11.png";
import doce from "./Assets/Imgs/tools/12.png";
import cuatro from "./Assets/Imgs/tools/4.png";
import trece from "./Assets/Imgs/tools/13.png";
import quince from "./Assets/Imgs/tools/15.png";
import veinte from "./Assets/Imgs/tools/20.png";
import catorce from "./Assets/Imgs/tools/14.png";
import dieciocho from "./Assets/Imgs/tools/18.png";
import veintiuno from "./Assets/Imgs/tools/21.png";
import dieciseis from "./Assets/Imgs/tools/16.jpeg";
import diecisiete from "./Assets/Imgs/tools/17.png";
import diecinueve from "./Assets/Imgs/tools/19.png";
import img_no_data from "./Assets/Imgs/img_se-vienen-cositas.gif";
import codevper93_avatar from "./Assets/Imgs/codevper93_avatar.jpg";

export const MainApp = () => {

    const imgs_tool = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve,
        diez, once, doce, trece, catorce, quince, dieciseis, diecisiete, dieciocho, diecinueve, veinte, veintiuno];

    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);

    const username = 'codevper93'; // Cambiá por tu usuario

    const [selectedType, setSelectedType] = useState("");

    // Filtrar los elementos según el tipo seleccionado
    const filteredItems = selectedType
        ? datasetDevMapping.filter((item) => item.type === selectedType)
        : datasetDevMapping;

    // Función para mezclar el arreglo aleatoriamente
    function shuffleArray(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    const randomizedImgs = shuffleArray(imgs_tool);
    useEffect(() => {
        const octokit = new Octokit();

        const fetchData = async () => {
            try {
                const { data: user } = await octokit.rest.users.getByUsername({ username });
                setUserData(user);

                const { data: reposData } = await octokit.rest.repos.listForUser({
                    username,
                    sort: 'updated',
                    per_page: 100,
                });

                setRepos(reposData);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);

    if (!userData) return <div>Cargando datos del usuario...</div>;

    return <>

        <div className="codevper93__home_presentation_content">

            <Container>

                <div style={{ marginBottom: "5%", marginTop: "5%" }}>
                    <Row>
                        <Col md={10} style={{ margin: "0 auto" }}>
                            <Card style={{ border: "1px solid transparent", background: "transparent" }}>
                                <Card.Body>
                                    <>
                                        <div className="codevper93__card_bg_content">

                                            <div style={{ marginBottom: "3%" }}>
                                                <div style={{ marginBottom: "1%", textAlign: "center" }}>
                                                    <b style={{ letterSpacing: "3px", textTransform: "uppercase", fontSize: "1.5em" }}>Estudios </b>
                                                </div>
                                                <div className="text_description">
                                                    Soy programador y comencé mi formación académica en la Facultad de Informática de la UNLP; año 2014.
                                                    Sin embargo, con el tiempo me di cuenta de que el ritmo y compromiso que exigía la carrera no se
                                                    alineaban con mi forma de aprender. <br /> Fue entonces cuando decidí tomar un camino distinto: la
                                                    formación autodidacta. Desde ese momento, me volqué de lleno al aprendizaje por cuenta propia,
                                                    explorando nuevas tecnologías, resolviendo problemas reales y desarrollando proyectos que me
                                                    permitieron crecer tanto técnica como personalmente.
                                                </div>
                                            </div>

                                            <div style={{ marginBottom: "3%" }}>
                                                <div style={{ marginBottom: "1%", textAlign: "center" }}>
                                                    <b style={{ letterSpacing: "3px", textTransform: "uppercase", fontSize: "1.5em" }}>Herramientas y Tecnologías </b>
                                                </div>
                                                <div style={{ textAlign: "center" }}>
                                                    {randomizedImgs.map((e, i) => (
                                                        <Image src={e} key={i} width={50} style={{ marginRight: "3%", marginBottom: "5%", filter: "grayscale(.5)" }} />
                                                    ))}
                                                </div>
                                            </div>
                                            <div style={{ textAlign: "center" }}>
                                                <Button className="codevper93__btn_project_glitch" variant="dark" onClick={handleOpen}>
                                                    <span className="codevper93__glitch" data-text="PROYECTOS">PROYECTOS</span>
                                                </Button>
                                            </div>

                                            <div style={{ textAlign: "center", marginTop: "5%" }}>
                                                Trabajemos juntos 🚀 <br />
                                                <span style={{ color: "#f64141" }}>bailadorgaston93@gmail.com</span>
                                            </div>

                                        </div>

                                    </>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div style={{ marginBottom: '5%' }}>
                    <Row>
                        <Col md={10} style={{ margin: '0 auto' }}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        {/* Perfil */}
                                        <Col md={4} style={{ textAlign: 'center' }}>
                                            <Image src={userData.avatar_url} alt="Avatar" style={{ borderRadius: '50%', width: '100px', marginBottom: '1rem' }} />
                                            <h5>{userData.name || 'Sin nombre'}</h5>
                                            <p>@{userData.login}</p>
                                            <p><RiUserStarFill size={20} color="#0b57d0" /> Seguidores: {userData.followers}</p>
                                            <p><HiMiniArchiveBoxArrowDown size={20} color="#077541" /> Repos públicos: {userData.public_repos}</p>
                                        </Col>

                                        {/* Repositorios */}
                                        <Col md={8}>
                                            <h5 style={{ marginBottom: "5%" }}>📂 Repos públicos</h5>
                                            {repos.length === 0 ? (
                                                <p>No hay repositorios públicos.</p>
                                            ) : (
                                                <ul style={{
                                                    listStyle: 'none', paddingLeft: 0, maxHeight: '300px',
                                                    overflowY: 'auto', marginBottom: 0
                                                }} >
                                                    {repos.map((repo) => (
                                                        <li key={repo.id} style={{ marginBottom: '1rem', borderBottom: "1px solid #8f8f8f", padding: "2%" }}>
                                                            <a href={repo.html_url} target="_blank"
                                                                rel="noopener noreferrer" style={{ fontWeight: 'bold' }} >
                                                                {repo.name}
                                                            </a>
                                                            <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                                                                {repo.description || 'Sin descripción'}
                                                            </p>
                                                            <small><FaStar size={20} color="#f3bc00" /> {repo.stargazers_count} | <FaCodeFork size={20} color="#d45d00" /> {repo.forks_count}</small>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <Modal show={show} onHide={handleClose} centered fullscreen >

                    <Modal.Header closeButton className="codevper93__glitch_modal_header codevper93__modal_bg">
                        <div className="codevper93__glitch_header_content  d-flex align-items-center gap-2">
                            <div className="glitch-avatar">
                                <Image src={codevper93_avatar} width={50} height={50} alt="Codevper93 - Avatar" />
                            </div>
                            <h5 className="glitch-title" data-text="Proyectos">Proyectos</h5>
                        </div>
                    </Modal.Header>

                    <Modal.Body className="codevper93__glitch_modal_body">

                        <div className="BP__dev_content">

                            <div className="content_dev">
                                <Container>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group >
                                                <Form.Label className="label_input" htmlFor="select_category">Seleccionar tipo</Form.Label>
                                                <Form.Select className="input_contact" id="select_category" name="select_category"
                                                    value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                                                    <option value="">Seleccionar</option>
                                                    {
                                                        ["Trabajos", "Proyectos", "Prácticas", "Challenges", "Random"].map((e, i) => <option key={i} value={e}>{e}</option>)
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div className="result_num">
                                        Resultado{filteredItems.length > 1 ? "s" : ""}<span className="color_red">{`(${filteredItems.length})`}</span>
                                    </div>

                                    {
                                        filteredItems.length === 0 ? <Row style={{ paddingBottom: "10%" }}>
                                            <Col md={7} style={{ margin: "0 auto" }}>
                                                <Alert className="alert_nothing_to_show" variant="secondary"    >
                                                    <Alert.Heading style={{ textAlign: "center", fontWeight: "bold" }}>Nada para mostrar</Alert.Heading>
                                                    <div style={{ textAlign: "center", marginTop: "5%" }}>
                                                        <Image className="fadeIn_no_infinite" src={img_no_data} style={{ borderRadius: "20px" }} />
                                                    </div>
                                                    <div style={{ textAlign: "center", marginTop: "5%" }}>
                                                        Trabajemos juntos 🚀 <br />
                                                        <span style={{ color: "#f64141" }}>bailadorgaston93@gmail.com</span>
                                                    </div>
                                                </Alert>
                                            </Col>
                                        </Row> : <Row style={{ paddingBottom: "10%" }}>
                                            {
                                                filteredItems.map((e, i) => <Col md={4} className="fadeIn_no_infinite" style={{ marginBottom: "5%" }} key={i}>
                                                    <Card className="bailador_project_dev_project_card h-100" >
                                                        <Card.Header style={{ textShadow: "rgb(255, 0, 0) 0px 0px 10px" }} className="card_header_dp">
                                                            <span style={{ color: "#f64141" }}>#</span> {e.category}
                                                        </Card.Header>
                                                        <div className="text-danger text-center">
                                                            {e.description && e.description}
                                                        </div>
                                                        <Card.Body className="text-center ">
                                                            <Image width={200} src={e.img} />
                                                        </Card.Body>

                                                        <div className="title_name">
                                                            <MdOutlinePlayArrow size={20} color="#f64141" className="glowing" />  {e.name}
                                                        </div>

                                                        <div className="d-grid gap-2" style={{ marginBottom: "5%" }}>
                                                            <ButtonGroup size="sm">
                                                                <Button className="btn_info_dp">{e.development}</Button>
                                                                <Button className="btn_info_dp" style={{ color: "#f64141" }}>{e.type}</Button>
                                                                <Button className="btn_info_dp">{e.stack}</Button>
                                                            </ButtonGroup>
                                                        </div>

                                                        <Card.Body className="card_tags_tech">
                                                            {
                                                                e.tags.length > 0 && e.tags.map((e, i) => <Badge bg="danger" key={i} className="vibrate_slow_infinite" style={{ marginRight: "3%", marginBottom: "3%" }}>{e}</Badge>)
                                                            }
                                                        </Card.Body>
                                                        <Card.Footer className="card_footer_dp">
                                                            {
                                                                e.url_site === "-" ? "No enable" : <a href={e.url_site} target='_blank'>
                                                                    Visitar página <FaExternalLinkAlt style={{ marginLeft: "3%" }} />
                                                                </a>
                                                            }
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>)
                                            }
                                        </Row>
                                    }
                                </Container>
                            </div>
                        </div>

                    </Modal.Body>
                </Modal>
            </Container>

        </div>

    </>;
}