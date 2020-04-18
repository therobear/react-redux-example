import React, {Component} from 'react';
import { PageTree } from './subcomponents';

class PageToo extends Component {
    render() {
        return (
            <div>
                Page Too!!!!
                <PageTree />
            </div>
        );
    }
}

export default PageToo;