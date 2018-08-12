import React, { Component, createRef } from 'react';
import _ from 'lodash';
import './index.css';
import PropTypes from 'prop-types'

export default class DropDownMenu extends Component {
	static propTypes = {
		class: PropTypes.string,
		style: PropTypes.object,
		menuItemClass: PropTypes.string,
		menuItemStyle: PropTypes.object,
		list: PropTypes.array,
		collapseWhenMenuClick: PropTypes.bool,
		OnMenuClicked: PropTypes.func,
	}
	constructor(props) {

		super(props);
		this.state = props.list
			? { list: props.list }
			: {
				list: [
					{ icon: 'concierge-bell', text: 'Login to Table' },
					{ icon: 'concierge-bell', text: 'Be A Super Host' },
					{ icon: 'file-signature', text: 'Join The Table' },
					{ icon: 'user-friends', text: 'Invite a Friend' }
				]
			};
		this.itemCollapseOption =
			this.props.collapseWhenMenuClick === undefined || this.props.collapseWhenMenuClick === true
				? {
					'data-toggle': 'collapse',
					'data-target': '#_' + this.props.id + '_collapseExample',
					'aria-controls': '_' + this.props.id + '_collapseExample'
				}
				: {};
		this.OnMenuClicked = this.OnMenuClicked.bind(this);
		//whenever this function is called, you can use this.setState function.
		//because it is bound to this.
	}

	OnMenuClicked(i) {
		if (this.props.OnMenuClicked) this.props.OnMenuClicked(i, this.props.id);
		else console.log(`menu ${this.props.id} - ${i} clicked!`);
	}

	static getDerivedStateFromProps(props, state) {
		if (props.list) {
			//if props is changed, update states.
			return { ...state, list: props.list };
		} else {
			return state;
		}
	}

	getMainIcon() {
		return <i className={this.getIcon(this.props.icon)} />; //default
	}

	getIcon(iconName) {
		if (iconName === false) {
			return '';
		} else if (iconName && iconName.length > 0) {
			return 'fas fa-' + iconName + ' fa-1x ';
		} else {
			return 'fas fa-concierge-bell fa-1x ';
		}
	}

	render() {
		return (
			<div>
				<a
					className={'btn dropdown-toggle ' + this.props.class}
					data-toggle="collapse"
					href={'#_' + this.props.id + '_collapseExample'}
					role="button"
					aria-expanded="false"
					aria-controls={'_' + this.props.id + '_collapseExample'}
					style={this.props.style}
				>
					{this.getMainIcon()}
					<span style={{ marginLeft: '5px', marginRight: '5px' }}>{this.props.children}</span>
				</a>

				<div className="collapse" id={'_' + this.props.id + '_collapseExample'}>
					{this.state.list.map((item, idx) => (
						<button
							key={this.props.id + '_collapseItem_' + idx}
							className={"dropdown-item " + this.props.menuItemClass}
							style={this.props.menuItemStyle}
							onClick={(e) => {
								this.OnMenuClicked(idx);
							}}
							{...this.itemCollapseOption}
						>
							<i className={this.getIcon(item.icon)} />&nbsp;
							<span>{item.text}</span>
						</button>
					))}
				</div>
			</div>
		);
	}
}
