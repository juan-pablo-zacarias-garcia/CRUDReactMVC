import { Table } from 'reactstrap';
import { Button} from 'reactstrap';
function TablaContacto({ data, setEditar, mostrarModal, setMostrarModal, eliminarContacto }) {
    const enviarDatos=(contacto) => {
        setEditar(contacto);
        setMostrarModal(!mostrarModal);
    }
  return (
      <Table stripe responsive>
          <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Telefono</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {
                  (data.length < 1) ? (
                      <tr>
                          <td colSpan="4">Sin registros</td>
                      </tr>
                  ) : (
                          data.map(contacto => (
                              <tr key={contacto.idContacto}>
                                  <td>{ contacto.nombre}</td>
                                  <td>{ contacto.correo}</td>
                                  <td>{contacto.telefono}</td>
                                  <td>
                                      <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(contacto)}>Editar</Button>
                                      <Button color="danger" size="sm" onClick={() => eliminarContacto(contacto.idContacto)} >Eliminar</Button>
                                  </td>
                              </tr>
                          ))
                  )
              }
          </tbody>
      </Table>
  );
}

export default TablaContacto;