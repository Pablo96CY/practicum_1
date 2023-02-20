import { request } from "./apiFunctions";
import { INGREDIENTS_DATA_API_URL } from "./const";
import { Methods } from "./enum";

export const getIngredientsMainData = () => {
  return request(`${INGREDIENTS_DATA_API_URL}/ingredients`)
};

export const createNewOrders = (ingredientsId) => {
  return request(`${INGREDIENTS_DATA_API_URL}/orders`, 
    {
      method: Methods.POST,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ ingredients: ingredientsId })
    }
  );
};

export const registerUser = (user) => {
  return request(`${INGREDIENTS_DATA_API_URL}/auth/register`, 
    {
      method: Methods.POST,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ ...user })
    }
  );
}

export const loginUser = (user) => {
  return request(`${INGREDIENTS_DATA_API_URL}/auth/login`, 
    {
      method: Methods.POST,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ ...user })
    }
  );
}

export const logoutUser = () => {
  return request(`${INGREDIENTS_DATA_API_URL}/auth/logout`, 
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ 
        token: localStorage.getItem("refreshToken") 
      })
    }
  );
}

export const forgotPassword = (form) => {
  return request(`${INGREDIENTS_DATA_API_URL}/password-reset`, 
    {
      method: Methods.POST,
      body: JSON.stringify({ ...form })
    }
  );
}

export const resetPassword = async(form) => {
  return request(`${INGREDIENTS_DATA_API_URL}/password-reset/reset`, 
    {
      method: Methods.POST,
      body: JSON.stringify({ ...form })
    }
  );
}

export const refreshToken = () => {
  return request(`${INGREDIENTS_DATA_API_URL}/auth/token`,
  {
    method: Methods.POST,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken")
    })
  });
}

export const getUser = () => {
  return request(`${INGREDIENTS_DATA_API_URL}/auth/user`, 
  {
    method: Methods.GET,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken")
    }
  });
}

export const updateUser = (user) => {
  return request(`${INGREDIENTS_DATA_API_URL}/auth/user`,  
  {
    method: Methods.PATCH,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken")
    },
    body: JSON.stringify({ ...user })
  });
}