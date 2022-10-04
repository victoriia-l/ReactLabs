import Table from 'react-bootstrap/Table';

const data = {
    firstName: "John",
    lastName: "Silver",
    occupation: "Pirate Captain"
}

export function BasicTable() {
    return (
        <div className='mt-1 mb-1'>
          <h3>Task 2</h3>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td><strong>First Name</strong></td>
                <td>{data.firstName}</td>
              </tr>
              <tr>
                <td><strong>Last Name</strong></td>
                <td>{data.lastName}</td>
              </tr>
              <tr>
                <td><strong>Occupation</strong></td>
                <td>{data.occupation}</td>
              </tr>
            </tbody>
          </Table>
        </div>
    );
}