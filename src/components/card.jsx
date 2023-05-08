import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../home.css"

function Cardon() {
  return (
    <>
    <div className="oi">
      
    <Card style={{ width: '18rem' }} bg="lite">
      <Card.Img style={{ width: '286px', height:'200px'}} src="https://iloveflores.com/wp-content/uploads/2021/11/significado-do-amarelo.jpg" />
      <Card.Body>
        <Card.Title>Flor Amarela</Card.Title>
        <Card.Text>
          Conheça as plantas amarelas
        </Card.Text>
        <Button variant="primary" href='/Produtos'>Ver Mais</Button>
      </Card.Body>
    </Card>
    
    
        <Card style={{ width: '18rem' }} bg="lite">
        <Card.Img style={{ width: '286px', height:'200px'}} src="https://img.freepik.com/fotos-gratis/natureza-morta-em-close-de-uma-flor-dentro-de-casa_23-2148965612.jpg?w=2000" />
        <Card.Body>
          <Card.Title>Flor Vermelha</Card.Title>
          <Card.Text>
            Conheça as plantas vermelhas
          </Card.Text>
          <Button variant="primary" href='/Produtos'>Ver Mais</Button>
        </Card.Body>
      </Card>
      
          <Card style={{ width: '18rem' }} bg="lite">
          <Card.Img style={{ width: '286px', height:'200px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzbnG-daAZAGB_TIr4dOBIhzmla8BeS2Z-mwqbXD32X_iBEqX8MbIANGWQVQfRKOMZig&usqp=CAU" />
          <Card.Body>
            <Card.Title>Flor Roxo</Card.Title>
            <Card.Text>
            Conheça as plantas vermelhas
            </Card.Text>
            <Button variant="primary" href='/Produtos'>Ver Mais</Button>
          </Card.Body>
        </Card>
        </div>
        </>
  );
}

export default Cardon;