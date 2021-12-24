import axiosInstance from '../plugins/axios';

type AnyObject = { [key: string]: any };

const endpoints: AnyObject = {
  list(type: string, query: string) {
    return `/${type}/list?${query}`;
  },
  category(type: string, query: string) {
    return `/${type}/bycategory?${query}`;
  },
  search(type: string, query: string) {
    return `/${type}/search?${query}`;
  },
};

function buildQuery(options: AnyObject) {
  return Object.keys(options).reduce((query, key, index) => {
    const value = options[key];

    return `${query}${index !== 0 ? '&' : ''}${key}=${value}`;
  }, '');
}

export default {
  async get<Return = any>(type: string, endpoint: string, filters: AnyObject) {
    const query = buildQuery(filters);
    const response = await axiosInstance.get<Return>(endpoints[endpoint](type, query));

    return response;
  },

  async post<Return = any>(type: string, endpoint: string, data: AnyObject, filters: AnyObject) {
    const query = buildQuery(filters);
    const response = await axiosInstance.post<Return>(endpoints[endpoint](type, query), data);

    return response;
  },
};
