import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

const withLocation = Component => props => {
   const location = useLocation();
   const navigate = useNavigate();
   const params = useParams();
   return (
         <Component
           {...props}
           router={{ location, navigate, params }}
         />
       );
}

export default withLocation;