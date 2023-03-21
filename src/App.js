import { useColorMode } from "@chakra-ui/color-mode";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Realisation from "./Realisation";
import CV from "./CV";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VycyI6eyJpZF9Vc2VyIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkZ2xlb0d1TkFlckhSbHR2Znl6dlQ2LmdpcVRxUUhySTl5RzViWjdpMlhXV3dENmlJS0Z0N0MiLCJub20iOiJNZXJjdXJlTSIsIm1ldGllciI6IkTDqXZlbG9wcGV1ciBGdWxsIFN0YWNrXHJcbiYgV2ViIGRlc2lnbmVyIiwiZGVzY3JpcHRpb24iOiJEw6l2ZWxvcHBldXIgZGUgbG9naWNpZWxzIGV0IHdlYmRlc2lnbmVyIMOgIFlhb3VuZMOpLCBhdSBDYW1lcm91biBhdmVjIHVuZSBleHDDqXJpZW5jZSBkYW5zIGxhIGNyw6lhdGlvbiBk4oCZYXBwbGljYXRpb25zIGF2ZWMgZGVzIHRlY2hub2xvZ2llcyBtb2Rlcm5lcy4iLCJkZXNjX3JlYWxpc2F0aW9uIjoiQmFzw6kgw6AgWWFvdW5kw6ksIGplIGTDqXZlbG9wcGUgZGVzIGFwcGxpY2F0aW9ucyB3ZWIgZXQgYXBwbGljYXRpb25zIG1vYmlsZXMgZW50acOocmVtZW50IHN1ciBtZXN1cmUuIEplIHLDqWFsaXNlcyDDqWdhbGVtZW50IGRlcyBwcmVzdGF0aW9ucyBkZSBtYWludGVuYW5jZSwgaMOpYmVyZ2VtZW50LiBEw6ljb3V2cmV6IGRhbnMgY2V0dGUgc2VjdGlvbiBsZXMgcHJvamV0cyBsZXMgcHJvamV0cyBxdWUgaidhaSBkw6l2ZWxvcHDDqS4gTidow6lzaXRleiBwYXMgw6AgbWUgY29udGFjdGVyIHBvdXIgbGEgcsOpYWxpc2F0aW9uIGRlIHZvdHJlIHByb2pldCBkaWdpdGFsLiIsImRlc2NfcmVhbGlzYXRpb25faW1hZ2UiOiJodHRwczovL3BvcnRmb2xpb21lcmN1cmUuczMuYW1hem9uYXdzLmNvbS9Qcm9maWxlL3JlYWxpc2F0aW9ucy5wbmciLCJhYm91dF9pbWFnZSI6Imh0dHBzOi8vcG9ydGZvbGlvbWVyY3VyZS5zMy5hbWF6b25hd3MuY29tL1Byb2ZpbGUvYWJvdXQucG5nIiwiYWJvdXRfZGVzY3JpcHRpb24iOiJJbmfDqW5pZXVyIGRlcyBUcmF2YXV4IEluZm9ybWF0aXF1ZXMgb3B0aW9uIEfDqW5pZSBMb2dpY2llbCwgamUgc3VpcyB1biBkw6l2ZWxvcHBldXIgZnVsbCBzdGFjayBldCBhdSBtw6ptZSB0aXRyZSB1biB3ZWIgZGVzaWduZXIuXHJcblxyXG5FbiBwbHVzIGRlIHBhcnRpY2lwZXIgw6AgZGUgbm9tYnJldXggcHJvZ3JhbW1lcyB0ZWNobm9sb2dpcXVlcyBvw7kgauKAmWFpIMOpdMOpIGZvcm3DqSBwb3VyIGF2b2lyIMOgIGxhIGZvaXMgZGVzIGNvbXDDqXRlbmNlcyB0ZWNobmlxdWVzIGV0IGfDqW7DqXJhbGVzLCBq4oCZYWkgYWNxdWlzIGRlcyBjb25uYWlzc2FuY2VzIGRlIHByb2dyYW1tYXRpb24gZGUgaGF1dCBuaXZlYXUgZW4gc3VpdmFudCBkZXMgZm9ybWF0aW9ucyBlbiBsaWduZSBzdXIgTGlua2VkSW4gRS1sZWFybmluZywgZW4gb2J0ZW5hbnQgdW4gY2VydGlmaWNhdCBGaWdtYSBldCB1biBjZXJ0aWZpY2F0IEphdmFTY3JpcHQgcmVzcGVjdGl2ZW1lbnQuXHJcblxyXG5RdWFuZCBqZSBuZSBjb2RlIHBhcyBqZSBqb3VlIMOgIHVuIGpldSB2aWTDqW8gb3UgamUgcmVnYXJkZSB1biBmaWxtLlxyXG5BIGNlcnRhaW5zIG1vbWVudCBq4oCZYXBwcmVuZHMgdW5lIG5vdXZlbGxlIGxhbmd1ZSBvdSB1biBub3V2ZWF1IGNhZHJlLiIsImltYWdlIjoiaHR0cHM6Ly9wb3J0Zm9saW9tZXJjdXJlLnMzLmFtYXpvbmF3cy5jb20vUHJvZmlsZS9wcm9maWwuUE5HIiwiY3JlYXRlZCI6IjIwMjMtMDMtMTdUMTU6MDY6MTIuMDAwWiJ9LCJpYXQiOjE2NzkzODcxMDB9.eZYWVWhFeKtNE8RRi-_U9Hd-EmgM7Hsw9Y1X9mIEJGQ";

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