import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import ImageList from 'preact-material-components/ImageList';
import 'preact-material-components/ImageList/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

export default class Item extends Component {
  render(){
    return (
      <LayoutGrid.Cell cols="3">
       <Card>
          <ImageList.Item>
            <ImageList.AspectContainer>
              <ImageList.Image src={this.props.image}/>
              <ImageList.Supporting>
                <ImageList.Label>{this.props.name}</ImageList.Label>
              </ImageList.Supporting>
            </ImageList.AspectContainer>
          </ImageList.Item>
          <div>
            <div class=" mdc-typography--caption">{this.props.description.substring(0,50)}</div>
          </div>
          <Card.Actions>
            <Card.ActionButton>Buy Now</Card.ActionButton>
          </Card.Actions>
        </Card>
      </LayoutGrid.Cell>
    );
  }
}