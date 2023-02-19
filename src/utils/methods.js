import { INGREDIENTS_DATA_API_URL } from "./const";
import { Methods } from "./enum";
import localize from "./localize";

export const getIngredientsMainData = async() => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/ingredients`);
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
};

export const createNewOrders = async(ingredientsId) => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/orders`, 
    {
      method: Methods.POST,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ ingredients: ingredientsId })
    }
  );
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
};

export const registerUser = async(user) => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/auth/register`, 
    {
      method: Methods.POST,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ ...user })
    }
  );
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}

export const loginUser = async(user) => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/auth/login`, 
    {
      method: Methods.POST,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ ...user })
    }
  );
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}

export const logoutUser = async() => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/auth/logout`, 
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ 
        token: localStorage.getItem("refreshToken") 
      })
    }
  );
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}

export const forgotPassword = async(form) => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/password-reset`, 
    {
      method: Methods.POST,
      body: JSON.stringify({ ...form })
    }
  );
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}

export const resetPassword = async(form) => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/password-reset/reset`, 
    {
      method: Methods.POST,
      body: JSON.stringify({ ...form })
    }
  );
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}

export const refreshToken = async() => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/auth/token`,
  {
    method: Methods.POST,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
  },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken")
    })
  });
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}

export const getUser = async() => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/auth/user`, 
  {
    method: Methods.GET,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken")
    }
  });
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}

export const updateUser = async(user) => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/auth/user`,  
  {
    method: Methods.PATCH,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken")
    },
    body: JSON.stringify({ ...user })
  });
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}