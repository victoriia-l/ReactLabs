import Card from 'react-bootstrap/Card';

export function Item(props){
    let {img, title, price} = props
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {price}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}