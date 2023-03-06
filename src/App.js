import { useColorMode } from "@chakra-ui/color-mode";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Realisation from "./Realisation";
import CV from "./CV";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VycyI6eyJpZF9Vc2VyIjoxLCJ1c2VybmFtZSI6IlJvbGFuZCIsInBhc3N3b3JkIjoiJDJiJDEwJGUvYnc1RkVlTmZHSUhJbUF3RFExQk9EaEY2RkRZaEh6enY0UUpBdmpLcFVKTFlPbDlUd2kyIiwibm9tIjoiTWVyY3VyZU0iLCJtZXRpZXIiOiJEZXYiLCJkZXNjcmlwdGlvbiI6Im9rIiwiZGVzY19yZWFsaXNhdGlvbiI6IlBST1BSRSIsImRlc2NfcmVhbGlzYXRpb25faW1hZ2UiOm51bGwsImFib3V0X2ltYWdlIjpudWxsLCJhYm91dF9kZXNjcmlwdGlvbiI6IkluZ8OpbmlldXIgZGVzIFRyYXZhdXggSW5mb3JtYXRpcXVlcyBvcHRpb24gR8OpbmllIExvZ2ljaWVsLCBqZSBzdWlzIHVuIGTDqXZlbG9wcGV1ciBmdWxsIHN0YWNrIGV0IGF1IG3Dqm1lIHRpdHJlIHVuIHdlYiBkZXNpZ25lci5cbkVuIHBsdXMgZGUgcGFydGljaXBlciDDoCBkZSBub21icmV1eCBwcm9ncmFtbWVzIHRlY2hub2xvZ2lxdWVzIG_DuSBq4oCZYWkgw6l0w6kgZm9ybcOpIHBvdXIgYXZvaXIgw6AgbGEgZm9pcyBkZXMgY29tcMOpdGVuY2VzIHRlY2huaXF1ZXMgIiwiaW1hZ2UiOm51bGwsImNyZWF0ZWQiOiIyMDIzLTAyLTIyVDA5OjM1OjA1LjAwMFoifSwiaWF0IjoxNjc4MDkzNzk1LCJleHAiOjE2NzgxODAxOTV9.5_Jo3nAi3r-Kd7df6OlbplbwzzeeT0NUWhgOpiw6gM8";

axios.interceptors.request.use(
  config => {
    config.headers.Authorization=`Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error);
  }
)


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="realisation" element={<Realisation smooth />} />
          <Route path="cv" element={<CV />} smooth />
        </Routes>
      </BrowserRouter>
  );
}

export default App;