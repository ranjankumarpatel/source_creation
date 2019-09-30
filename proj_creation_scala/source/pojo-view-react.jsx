import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Table,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import $pojo Controller from "../../api/controller/$pojo_lower -controller";

class $pojo View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      $pojo_lower s: []
    };
  }

  componentDidMount() {
    $pojo Controller.findAll()
      // fetch("http://localhost:8090/rest/activity/all")
      //   .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            $pojo_lower s: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, $pojo_lower s } = this.state;
    console.log(this.state);
    return (
      <div>
        <Row>
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
                      <th>{{field}}</th>
                     {% endfor %}
                    </tr>
                  </thead>
                  <tbody>
                    {$pojo_lower s.map($pojo_lower => (
                      <tr key={$pojo_lower.{{id_fields}}}>
                      {% for field in fields %}
                        <th scope="row">{$pojo_lower.{{field}}}</th>
                         {% endfor %}

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
