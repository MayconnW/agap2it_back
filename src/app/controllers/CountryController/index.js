import countries from "./tmpData";
import getCountry from "./getCountryInfo";

class ContractController {
  async index(req, res) {
    res.json({ countries });
  }

  async get(req, res) {
    const { countryId } = req.params;
    const { country } = getCountry(countryId);

    return res.json({ country });
  }
}

export default new ContractController();
