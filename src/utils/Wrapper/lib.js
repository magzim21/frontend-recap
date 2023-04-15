import axios from "axios";

class NewStoryLib {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  async createNewStory(words) {
    const prompt = `Create simple text with words: ${words.join(
      ", "
    )}. Use all of this words. Max words limit: ${words.length * 4}`;

    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt,
        model: model,
        max_tokens: 1000,
        n: 1,
        stop: ".",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response;
  }

  async get_words() {
    const res = await axios({
      method: "get",
      url: "https://back_max-1-x0007391.deta.app/get_words",
      headers: {
        "Cookie": "deta_app_token=3PiyDCYs7jFxWrBY5xClkLvA5TMUJR7MzZjjjjMiME8IIGrg",
        
      },
    });
    console.log(res);
    return res.data;
  }
}

export default new NewStoryLib("/*YOU API KEY HERE*/");
