import { useSelector } from 'react-redux';

export default function useAuth() {
  const token = useSelector(state => state.auth.token);

  return token;
}
