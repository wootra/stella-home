import apigClient from "../aws_api/react-apigClient";

export const ACTION_CUSTOMER = 'ACTION_CUSTOMER';
export const ACTION_CUSTOMER_BY_ID = 'ACTION_CUSTOMER_BY_ID';


let newClient = null;

export function action_customers(term = null) {

	// go to reducer to handle this..
	if (!newClient) newClient = apigClient();
	return {
		type: ACTION_CUSTOMER,
		payload: (newClient) ?
			((term !== null) ? newClient.apiCustomerGet() : newClient.apiCustomerOptions(term))
			: { data: { output: [] } }
	};
}

export function action_customerById(id, term = null) {
	if (!newClient) newClient = apigClient();

	return {
		type: ACTION_CUSTOMER_BY_ID,
		payload: (newClient) ?
			((term !== null) ? newClient.apiCustomerIdGet(id) : newClient.apiCustomerIdOptions(id, term))
			: { data: { output: [] } }
	};
}
