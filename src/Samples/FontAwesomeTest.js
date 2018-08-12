import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';

//library.add(fas.faStroopwafel);

export default class MapTest extends Component {
	render() {
		return (
			<div className="card">
				<p> using HTML i tag </p>
				<div className="card-body">
					<i className="fas fa-address-book" />
					<i className="fab fa-affiliatetheme" />
					<i className="fa fa-align-right" aria-hidden="true" />
				</div>
				<div style={{ fontSize: "0.5rem" }}>
					<i className="fas fa-stroopwafel fa-xs" />
					<i className="fas fa-stroopwafel fa-sm" />
					<i className="fas fa-stroopwafel fa-lg" />
					<i className="fas fa-stroopwafel fa-2x" />
					<i className="fas fa-stroopwafel fa-3x" />
					<i className="fas fa-stroopwafel fa-5x" />
					<i className="fas fa-stroopwafel fa-7x" />
					<i className="fas fa-stroopwafel fa-10x" />
				</div>
				<p>Using class</p>
				<div>
					{
						// export interface Props {
						//   icon: IconProp
						//   mask?: IconProp
						//   className?: string
						//   color?: string
						//   spin?: boolean
						//   pulse?: boolean
						//   border?: boolean
						//   fixedWidth?: boolean
						//   inverse?: boolean
						//   listItem?: boolean
						//   flip?: FlipProp
						//   size?: SizeProp
						//   pull?: PullProp
						//   rotation?: RotateProp
						//   transform?: string | Transform
						//   symbol?: FaSymbol
						//   style?: CSSProperties
						// }
					}

					<FontAwesomeIcon icon="stroopwafel" />
					<FontAwesomeIcon icon="stroopwafel" size="2x" />
					<FontAwesomeIcon icon="stroopwafel" size="3x" />
					<FontAwesomeIcon icon="stroopwafel" size="1x" color="red" />

					<FontAwesomeIcon icon={fas.faCoffee} />
					<FontAwesomeIcon icon={fas.faAddressBook} size="2x" />
					<FontAwesomeIcon icon={fas.faAlignCenter} size="3x" />
					<FontAwesomeIcon icon={fas.faAnchor} size="1x" color="red" />

					<FontAwesomeIcon icon={['fab', 'apple']} size="5x" />
				</div>
			</div>
		);
	}
}
