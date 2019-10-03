import React from "react";
import Moment from "react-moment";
import update from 'immutability-helper';
import {
  Row,
  Col,
  Card,
  CardBody,
  Table,
  CardTitle,
  CardSubtitle,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter, Form,
  FormGroup,
  Input, Label,DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import $pojo Controller from "../../api/controller/$pojo_lower -controller";

class $pojo View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        insertModal: false,
        updateModal: false,
        error: null,
        isLoaded: false,
        $pojo_lower: {},
        $pojo_lower s: []
    };

    this.insertModalToggle = this.insertModalToggle.bind(this);
    this.updateModalToggle = this.updateModalToggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.findByIdEdit = this.findByIdEdit.bind(this);

  }

  insertModalToggle() {
    this.setState(prevState => ({
      insertModal: !prevState.insertModal
    }));
  }

    updateModalToggle() {
    this.setState(prevState => ({
      updateModal: !prevState.updateModal
    }));
  }

  dropdownToggle(element) {
   //alert(JSON.stringify(element));

      element['isOpen']= !element.isOpen;
      let index = this.state.$pojo_lower s.findIndex(x => x.$id_fields === element.$id_fields );
      //alert(index);
      this.setState({
        items: update(this.state.$pojo_lower s, {[index]: {$id_fields: {$set: element.isOpen}}})
        });
    }

  findAll = function () {
    $pojo Controller.findAll()
      .then(
        result => {
        result.forEach(function(element) {
  element["isOpen"]=false;
});
          this.setState({
            isLoaded: true,
            admins: result
          });

        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      );
  }

  findByIdEdit($pojo_lower){
  this.setState({
            $pojo_lower: $pojo_lower
          });
          this.updateModalToggle();
  }

  on$pojo Change = (e) => {

    // this.state.$pojo[e.target.name] = e.target.value;
    this.setState({
      $pojo_lower: update(this.state.$pojo_lower, { [e.target.name]: { $set: e.target.value } })
    });

  }

  onInsertSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    $pojo Controller.insert$pojo(this.state.$pojo_lower).then(
      result => {
        console.log(result);
        this.setState({
          isLoaded: true,
          $pojo_lower: {}
        });
        this.insertModalToggle();
        this.findAll();

      },
      error => {
        this.setState({
          isLoaded: true,
          error: error
        });
      }
    );

  }

  onUpdateSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    $pojo Controller.update$pojo(this.state.$pojo_lower).then(
      result => {
        console.log(result);
        this.setState({
          isLoaded: true,
          $pojo_lower: {}
        });
        this.updateModalToggle();
        this.findAll();

      },
      error => {
        this.setState({
          isLoaded: true,
          error: error
        });
      }
    );

  }



  componentDidMount() {
     this.findAll();
  }

  render() {
    const { insertModal,updateModal,error, isLoaded, $pojo_lower, $pojo_lower s } = this.state;
    console.log(this.state);
    return (
      <div>
        <Row>
         <Col className="text-right mb-3" md="12">
            <Button color="info" onClick={this.insertModalToggle}><i className="fas fa-plus"></i> Create New</Button>
            <Modal isOpen={insertModal} fade={false} toggle={this.insertModalToggle} >
              <Form onSubmit={this.onInsertSubmit}>
                <ModalHeader toggle={this.insertModalToggle}>Create</ModalHeader>

                <ModalBody>
{% for field in fields %}
                  <FormGroup>
                    <Label>{{field}}</Label>
                    <Input className="mb-2" type="text" placeholder="{{field}}" name="{{field}}" onChange={this.on$pojo Change} />

                  </FormGroup>
 {% endfor %}


                </ModalBody>
                <ModalFooter>
                  <Button color="info" type="submit" >Save</Button>
                  <Button color="secondary" onClick={this.insertModalToggle}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Modal>

            <Modal isOpen={updateModal} fade={false} toggle={this.updateModalToggle} >
              <Form onSubmit={this.onUpdateSubmit}>
                <ModalHeader toggle={this.updateModalToggle}>Update</ModalHeader>

                <ModalBody>
{% for field in fields %}
                  <FormGroup>
                    <Label>{{field}}</Label>
                    <Input className="mb-2" type="text" placeholder="{{field}}" name="{{field}}" value={$pojo_lower.{{field}}} onChange={this.on$pojo Change} />

                  </FormGroup>
 {% endfor %}


                </ModalBody>
                <ModalFooter>
                  <Button color="info" type="submit" >Save</Button>
                  <Button color="secondary" onClick={this.updateModalToggle}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Modal>

          </Col>



          <Col md="12">
            <Card>
              <CardBody>
                <BootstrapTable
                  striped
                  hover
                  responsive
                  search={true}
                  data={$pojo_lower s}
                  pagination
                  tableHeaderClass="mb-0"
                >

{% for field in fields %}
                  <TableHeaderColumn width="100" dataField="{{field}}" {{'isKey' if field == id_fields else ""}}>
                   {{field}}
                  </TableHeaderColumn>
                  {% endfor %}

                </BootstrapTable>
              </CardBody>
            </Card>
          </Col>

          <Col md="12">
            <Card>
              <div className="p-3">
                <CardTitle>
                  <i className="mdi mdi-border-all mr-2"></i>Default Table
                </CardTitle>
                <CardSubtitle className="mb-0">
                  Using the most basic table markup
                </CardSubtitle>
              </div>
              <CardBody className="border-top">
                <Table responsive>
                  <thead>
                    <tr>
                    {% for field in fields %}
                      <th scope="row">{{field}}</th>
                     {% endfor %}
                     <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {$pojo_lower s.map(cur$pojo_lower => (
                      <tr key={cur$pojo_lower.{{id_fields}}}>
                      {% for field in fields %}
                      {% if field != "genDate" %}
                        <td >{cur$pojo_lower.{{field}}}</td>
                        {% else %}
                        <td ><Moment local titleFormat="D MMM YYYY" format="D MMM YYYY" withTitle>{cur$pojo_lower.{{field}}}</Moment></td>

                        {% endif %}
                         {% endfor %}
<td>
 <Dropdown
                    isOpen={cur$pojo_lower.isOpen}
                    toggle={()=>this.dropdownToggle(cur$pojo_lower)}>
                    <DropdownToggle color="info" caret>
                      Action
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem onClick={()=>this.findByIdEdit(cur$pojo_lower)}>Edit</DropdownItem>
                      <DropdownItem divider />
                      <a role="menuitem" className="dropdown-item">Another Action</a>
                    </DropdownMenu>
                  </Dropdown>
</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default $pojo View;
