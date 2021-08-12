export default function Hakkinda() {
  return (
    <div className="about">
      <div>
        <h1 className="u-center-text u-margin-bottom-small">Site Hakkında</h1>
        <p>
          Bu websitesinde reklam, izleyici veya çerez yoktur ve herkes rehber
          yazabilir.
        </p>
      </div>
      <div>
        <h2>Nasıl Rehber Yazarım?</h2>
        <ul className="about_list">
          <li>
            <a href="#">Örnek rehberi</a> indirin ve kuralları okuyun.{" "}
          </li>
          <li>
            <a href="#"> teknolojirehberleri@protonmail.com</a> adresine
            markdown dosyanızı gönderin.
          </li>
          <li>
            Başkasının yazısını sayfadan indirip güncelleme yaptıktan sonra
            tekrar gönderebilirsiniz.{" "}
          </li>
          <li>Rehberi yazan/katkı sağlayan kişileri keşfedebilirsiniz!</li>
        </ul>
      </div>
    </div>
  );
}
