export async function GetRandomUser() {
    const response = await fetch("https://randomuser.me/api/?results=8", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  }