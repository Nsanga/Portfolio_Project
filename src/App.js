import { useColorMode } from "@chakra-ui/color-mode";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Realisation from "./Realisation";
import CV from "./CV";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VycyI6eyJpZF9Vc2VyIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkaFBLd0docnM0d1MwSEwxTzdDazZGT3NDY0U5UXpuVEJNSHI3cEJ5dWdxZnd5WEV4QXM1VXkiLCJub20iOiJNZXJjdXJlTSIsIm1ldGllciI6IkTDqXZlbG9wcGV1ciBGdWxsIFN0YWNrXHJcbiYgV2ViIGRlc2lnbmVyIiwiZGVzY3JpcHRpb24iOiJEw6l2ZWxvcHBldXIgZGUgbG9naWNpZWxzIGV0IHdlYmRlc2lnbmVyIMOgIFlhb3VuZMOpLCBhdSBDYW1lcm91biBhdmVjIHVuZSBleHDDqXJpZW5jZSBkYW5zIGxhIGNyw6lhdGlvbiBk4oCZYXBwbGljYXRpb25zIGF2ZWMgZGVzIHRlY2hub2xvZ2llcyBtb2Rlcm5lcy4iLCJkZXNjX3JlYWxpc2F0aW9uIjoibnVsbCIsImRlc2NfcmVhbGlzYXRpb25faW1hZ2UiOiJodHRwczovL3BvcnRmb2xpb21lcmN1cmUuczMuYW1hem9uYXdzLmNvbS9Qcm9maWxlL3B4ZnVlbC5qcGciLCJhYm91dF9pbWFnZSI6Imh0dHBzOi8vcG9ydGZvbGlvbWVyY3VyZS5zMy5hbWF6b25hd3MuY29tL1Byb2ZpbGUvQ2FwdHVyZSUyMGQlQzMlQTIlQzIlODAlQzIlOTklQzMlODMlQzIlQTljcmFuJTIwMjAyMy0wMy0xNCUyMDIyMTIzMy5qcGciLCJhYm91dF9kZXNjcmlwdGlvbiI6IkluZ8OpbmlldXIgZGVzIFRyYXZhdXggSW5mb3JtYXRpcXVlcyBvcHRpb24gR8OpbmllIExvZ2ljaWVsLCBqZSBzdWlzIHVuIGTDqXZlbG9wcGV1ciBmdWxsIHN0YWNrIGV0IGF1IG3Dqm1lIHRpdHJlIHVuIHdlYiBkZXNpZ25lci5cclxuXHJcbkVuIHBsdXMgZGUgcGFydGljaXBlciDDoCBkZSBub21icmV1eCBwcm9ncmFtbWVzIHRlY2hub2xvZ2lxdWVzIG_DuSBq4oCZYWkgw6l0w6kgZm9ybcOpIHBvdXIgYXZvaXIgw6AgbGEgZm9pcyBkZXMgY29tcMOpdGVuY2VzIHRlY2huaXF1ZXMgZXQgZ8OpbsOpcmFsZXMsIGrigJlhaSBhY3F1aXMgZGVzIGNvbm5haXNzYW5jZXMgZGUgcHJvZ3JhbW1hdGlvbiBkZSBoYXV0IG5pdmVhdSBlbiBzdWl2YW50IGRlcyBmb3JtYXRpb25zIGVuIGxpZ25lIHN1ciBMaW5rZWRJbiBFLWxlYXJuaW5nLCBlbiBvYnRlbmFudCB1biBjZXJ0aWZpY2F0IEZpZ21hIGV0IHVuIGNlcnRpZmljYXQgSmF2YVNjcmlwdCByZXNwZWN0aXZlbWVudC5cclxuXHJcblF1YW5kIGplIG5lIGNvZGUgcGFzIGplIGpvdWUgw6AgdW4gamV1IHZpZMOpbyBvdSBqZSByZWdhcmRlIHVuIGZpbG0uXHJcbkEgY2VydGFpbnMgbW9tZW50IGrigJlhcHByZW5kcyB1bmUgbm91dmVsbGUgbGFuZ3VlIG91IHVuIG5vdXZlYXUgY2FkcmUuIiwiaW1hZ2UiOiJodHRwczovL3BvcnRmb2xpb21lcmN1cmUuczMuYW1hem9uYXdzLmNvbS9Qcm9maWxlL3Byb2ZpbCUyMCgzKS5QTkciLCJjcmVhdGVkIjoiMjAyMy0wMy0xNlQxMDo0OToxMy4wMDBaIn0sImlhdCI6MTY3OTA1MDI4Nn0.PwKCQDR5VDxtJI9_WkRXmHV6T4R7jINr3wz8EdKZ4nA";

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