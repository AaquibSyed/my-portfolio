import React from "react";
import "./Skills.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const skills = [
  {
    name: "HTML5",
    percentage: "seventy",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABEdNWOuMVSZwUJ1wIXec3YBUtcIujyDIXoLA40_-GOd6S-381BYRF0ni601xPQjVNO7wxGoqefuH5Ys1Bd1U0z-V9gLmg4Mdou5tXq8o91mADdOweqs-nPUOFpTz8fEnJ8C_3fOnKyi1jQ0eIKz_dk-coqN09ZnMma3JFnQX2EhFtgsz2rhlghzLzpJ_AoS3ZgyXl5UiMhZ7sAiStwYwnqoS0npy-qzwYYwVc_XvtikYUf6ThdIFPyGcj3t4pFASPESZTW-Dlb3Zt2WHOJxzfXWHjzm-68HXQi1UU3djmosrdAgjWxNx28JpbEL_LnpOqM4hlKoe7wDhQxERKduLYLdJ2upRCWCGxSP0ROVlgMdTw/p.png?size=1024x768&size_mode=3",
  },
  {
    name: "CSS",
    percentage: "seventy",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABEolSW7ZlDeRaYjkORHcjpCcl6ORGnPB148hfpAtD3Ns5Zxmnz9nNpLsOAIV0yKNpd6kV-ABwhPnBgj6O2PlwyTuU_QclyibaWLEUOdXFbMEyIGt_LiIL9iSos1ym-ig78qT1yu4B2-WnnLisLj7aHrQaG317twmoZFn6D2raNqqkiNvxLDvmS4aoauOs0jpaT5TLqfI3DuqzwSWqLip29RZzD6sIXMdYYZ6NCPDkhsDICKoA4OY82nYDIU_uJMcw8O0Tsqe24gVToBD_wR4_s8qL0Bq8bRXgbvt_NOtJzMObip5T4c6sb8NU53HgomfghmrXX7tMT31OREX5Mo7V6ht-bFjRjAfStG3wqMIol2yA/p.png?fv_content=true&size_mode=5",
  },
  {
    name: "JavaScript",
    percentage: "eighty",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABENcCpBvklbK0KLMpFSjlLHlbjN0Px4KEq73rkhFN8i-TKpVmKiVg086uuhACsEwUxZpFJKbeaQ5_5Ly4D27vYeKvTfyYkCfiaxKOmgfKQk-iHqUdl2pSb-SnT_U5l7CSbvOJJdtADKrRarQRNKAlei7duZ82dBVaiQtaX9dNgP8ON1nT3gOVPiGkK3KsXCsBxrVGHeZ0WIO5lVy6bGNrOMddspXZ8TL7EmQvDlzyfILwLuZDXCwVDkmhPIPNaUb7fu6aeab1wikOxNl6Kw6i6ZzTm14HfYxK3_lErjrduHCHdiFHplFXHkSWejRSAj982Uqos0q96FHg2wVvuCk7PitgXiHAaDpfE63LlmvmDoPw/p.png?fv_content=true&size_mode=5",
  },
  {
    name: "NodeJs",
    percentage: "sixty",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABEPVIUoLPFPcBnLrmM6jmh_15Kd2gSSWbMMVFiuQ6_Wa_WsyKE4kTagCWX5SuAYKFVk8QdCBMYe81lUL0oYkD-D6DUEO-Uf0o2BjtX9niRbgqtBNn3jupTNXBF6FRGare1wNPu5wgzkWQP3oazbKCmECRMS-Q0HjewzbKIBe6IZkwi7iJDFVFr1AHEKUzA3h5_J4Yzq60W6kNu3IWpuWReY-te4xdVEBpuzB2HqxCFBaWZ31HTTDQK2fXTa9q8t0PTx9YYt_SAwmTP5awXPi-3nN0smRM-LJ3RryE6DZm39N7fQBTbhaAgKUJ8pi11-i_bWEVKVwYR_Q4A-r__XVXTlFa_EA9flXzFhRYDatt7tDg/p.png?fv_content=true&size_mode=5",
  },
  {
    name: "ReactJs",
    percentage: "seventy",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABGB2aQVG3vF-kGPb6_h8aY4wFo4MroHHHrNcNT27kDwem0tKqTDsloZaKtp2X-hpMU0MKWMOf_nXxElNTQk0B397J3U9yh0FxftTcy7dxwnad4-OBsW63_9jfXdoyYHsrcO61D9b5n_TA-MPD1LxLQudXX790037k8owW-HFPaZmHdcidrLVyt1us7o07u1-R5UHvai10fwuIOaqAfI0q-d4j-qXuHZjEE7lBicgOs6TjKEsimyqm5M8GELzKH9DtdKhiPx16pNTHEjlwaq7tBVtROG4-P4fsvFkoyNL2Xp5dzXrDTcxkIjj6ib6Mu5wVmjso21k-p0DTVlgvsDkSI_3UkttMbacisqsGMke4ziqw/p.png?fv_content=true&size_mode=5",
  },
  {
    name: "MongoDb",
    percentage: "fifty",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABEkL8pmW1RmpyecupByrXj_hOkcxAnTaTELr0a0W-EOW7Hgp7cZiiT3lU2Jz7EwMd4VJcgqIm-h2bU5LsOQQB4lWY_5trQK_GWYOOpZsOZogmopsteJWa5m0S16wah86NlT9PonBz6XLvFIakUrGkAkif0i9Kv_rwoSaK-69Q5MSr4hCJraiKtzGynqRLVGD7JKW0NYpt81oX16UAj11aCMG355K5lp-49G6dKr0zco9d0CiLbiUDAv76FAAZEMowIKAs9jkbPj3E83jwABDU6lwcW1uLZa8Bbd86_HRduqIBPP-baXVse7dJtfVNwMIc0RgR4juf3vN6IBxYxrKcT0tLoOSbFe5yPANHxDb3kK4Q/p.png?size=1024x768&size_mode=3",
  },
  {
    name: "MS SQL",
    percentage: "seventy",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABFnIbGLcK99YSmY36UiZFmBWLnTtxwfwPUusQepTlhFLy-5pqraNU7Qy3GL5HgDqY_aJu5GdaiDBqj-jAPRMbrFhkC1LX7lqsaGZ74D4HiwvkjJeRzpw_xgSXvJakfBbNW_FHfdtDflQi9wGSlvYzu2WiIZqHVYMDpkylsHAik9QfCDftymQMuc8To4BGbkMzmnw_D4WeUzYvhsAE7y71HfiQDpPntY4JQfSX200Qr4ri0fntQJx42WmN_gtshdqcRhatY0ulWo8ZdPvVbsFZn9KJuCMQrZE9Q8_JHVn_5xaUeZ5ACQz_hG4Zu20zhBOeoI8CSG9RQvdnqHc30GpSYfDgguLytV4TsxoyR4YRB5nQ/p.png?fv_content=true&size_mode=5",
  },
  {
    name: "C#",
    percentage: "sixty",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABH0IFvbJ98Qre5gtMuZv2jzkRE-McVHraGv_IzLCkzYP1Z4vnMITmg1y4uOnNhOhA04S8gbgyDsk67I1_kVcz1lP1acR6Jp8zh3qQt5LqqfnIvqVWSlj5_EGHP_xQ1QTQZgArB0NiNDHFHxw6LkeBSDzmt0V8BSzQszUIN50HChaCGQKldSysafMkSA_E5lbDQD7H46KyUJPzIs7zjpOYAqlkX5jaIOQok-rDfy4VMzwVm7BPOzZRL2Xt49Ogmy419fXaz0pXvf7kc1ZKyNCtQRq-OOYYuLz7v2j68_Ix4GJtn1nafGE_I58YFDQiYxPoyBaC4bKRCfuGqkJubwUYItDs7GJFPb8f1wdq5GLSnGsQ/p.png?fv_content=true&size_mode=5",
  },
  {
    name: "Photoshop",
    percentage: "eighty",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABEYLYjilzVoxdMmiIOOh3Zlf_bfan9nurj7Yav_Sa-FEe2miRcCkpOacuqM8PfKRnO66HXTRZ4R-u9N5AflXuIx-fjYyNMzlZbmzrPnF_OdK4KYmi2PXD6ASTdqQOLh7z10c0a7hJKudIZ6XkQ7VukVIJQ1wvnhGdd2Wst7QhSLtWH4CtqOP73zczpGHKC8Ui_-7SYNUxBkhTV6O8aN75OOvt-Jxtc-J_I32eF4zfSKvD8ht9MSOaL1oe0f_vWk93-YRglIXM9wx5XI0q2uSPoc9ql-Agcxr2TDUTcI_Xy6oKFrAyC0DO__7kF2wepvFBptkl2JfAc343q-YZWVjagA3FzUCCxKyj4QuigoaG3bQA/p.png?fv_content=true&size_mode=5",
  },
  {
    name: "Illustrator",
    percentage: "seventy",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABEsb8kFFC2FfQoa6PIb2YTv7R8_KxUq9MtN4OVuFn4q49zgvLXLwmGRHVQD4y-ddmt7RhQ9Fl3cppHjsy-JILKBY6Wa11dmJy-JFlN7m09TCEHXRyz6Ya5hErZVxd7YFmNR51teRusswiSKMfkuR9IkNla2kpi2OZtUZ5MebCfMcHzylMNffIA8NrdP9bfRWTMUrKkBqSQZLY1N4borbLS3SJiHLhMqcjAb1gSZ1wHxj6R4tuYs7ZuTQKLcl75eU8NPmrl8IGYbK-svHJccjGtmtkRfso6TU-Owfqu5TFT7r2oNVzfVnSxS79Hd502yFTlVWgVK7QsOW1o2hKwdj56aEfVjoTs1HOzHXLG-XDD7MA/p.png?fv_content=true&size_mode=5",
  },
  {
    name: "Figma",
    percentage: "sixty",
    className: "skills__detail",
    imgURL:
      "https://previews.dropbox.com/p/thumb/ABEjWKOHqjZbci1tcvja0BtZ8sNAOm8x5ymo6BW3_eAGFcvfRu1yDrpPrvP_9nnViLIcmALtgiB893MXAIHzg7_kOzwTVu3WuLe1MB6yABJS0LvEQ5zrS3FvU7uSHtzt_2Ty3oXprsRSFs-qx0IFS-nEB4jEg4d32c9B4aduLafOBZcCZB9pfuKtKj5tQfLEAAiNVb-x8YTKdG996ObY643RnrL302r5Tt2YQudYBt8H_YRBNzfP1yH3yWXQNCQoMCJNPeTcUBgz81Hr4SlRZ3z0lBhrC14wo6hPVswHUF1yl35wLqqNRByptIOlF8RgVII3WUMrlcnRy0gqRcqsWxjXop2bzCL-qnjFo-rPwPwVcg/p.png?fv_content=true&size_mode=5",
  },
];

export const Skills = () => {
  return (
    <Fade>
      <div className="skills__main">
        <div className="header">
          <h1>SKILLS</h1>
        </div>
        <div className="skills">
          {skills.map((skill) => (
            <Zoom top cascade>
              <div className="skills__Container">
                <img
                  src={skill.imgURL}
                  className="skills__image"
                  alt={skill.name}
                />
                <div className="skills__bar">
                  <div className={`${skill.className} ${skill.percentage}`}>
                    <p className="skills__name">{skill.name}</p>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </Fade>
  );
};
