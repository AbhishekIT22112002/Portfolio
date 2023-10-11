import * as React from "react";

function SkillIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={96}
      height={96}
      viewBox="0 0 172 172"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{
          mixBlendMode: "normal",
        }}
      >
        <path d="M0 172V0h172v172z" />
        <path
          d="M89.897 56.102c-.672-.034-1.31-.202-1.881-.538-.773-.47-1.243-1.109-1.646-1.78-.504.336-1.042.604-1.58.84 1.378 2.452 2.42 5.14 3.293 7.659.1.269.201.537.269.806-.034-.134-.034-.269-.034-.403.168-2.116.605-4.535 1.579-6.584zm3.56 24.96a9.316 9.316 0 01-1.108.302c-2.385.605-4.636.504-6.92.034.907 1.31 2.385 2.049 4.166 2.082 1.68.034 3.493-.537 3.997-2.082-.067-.135-.1-.236-.134-.336z"
          fill="#f1c40f"
        />
        <path
          d="M103.066 45.99c-1.982-4.703-7.156-7.357-11.926-8.331-5.174-1.075-11.153-.74-15.756 2.15-2.486 1.579-4.602 3.83-5.375 6.718-1.108 4.099.034 8.197 2.453 11.624 4.199 5.946 14.512 10.683 12.295 19.316.773.235 1.579.47 2.385.605-.47-4.703-.739-9.507-2.318-14.009-.672-1.948-1.579-3.863-2.419-5.778-.57-1.243-1.175-2.52-1.948-3.695-.605-.403-1.109-1.075-1.445-2.016-.638-1.68 1.781-3.326 3.024-1.915.269.303.504.605.739.907.336-.1.638-.201.94-.403.706-.403 1.344-.84 1.882-1.41.773-.807 2.318-.807 2.923.235.268.47.739 2.116 1.242 2.351 1.042.47 2.52-.403 3.427-.806 1.747-.806 2.788 1.31 2.05 2.687.134.504.033 1.075-.505 1.58-1.78 1.612-2.52 4.434-2.654 6.785-.1 2.016-2.855 2.453-3.527 1.008 1.445 4.67 1.78 9.54 2.284 14.412.84-.202 1.68-.437 2.453-.773.235-.1.504-.235.739-.37 0-.1-.034-.167-.034-.268-.268-6.618 3.326-11.422 6.551-16.83 2.452-4.166 4.502-9.071 2.52-13.774zm-39.91 108.004c.874-.067 1.21-.37 1.31-.706-.268.403-.705.672-1.31.706z"
          fill="#f1c40f"
        />
        <path
          d="M156.648 92.45c-.135-.705-.605-1.344-1.008-1.915-.135-.201-.235-.403-.269-.605l-.067-.067c-2.52-3.36-4.67-7.054-7.39-10.246-2.42-2.788-5.174-5.341-6.787-8.7-1.78-3.629-1.343-8.197-.537-12.027.84-3.863.47-7.827.605-11.758a1.681 1.681 0 01-.303-.84c-.437-3.326-1.78-6.45-3.494-9.305-4.3-7.156-10.01-13.84-17.065-18.41-6.316-4.098-13.438-6.718-20.895-7.894-15.084-2.352-30.57.638-44.613 6.282-4.2 3.594-9.003 6.584-12.564 10.85-3.897 4.637-6.685 10.415-8.5 16.193-2.788 8.936-4.534 18.88-2.72 28.185 1.847 9.44 6.886 17.905 11.455 26.203a721.719 721.719 0 008.029 14.042c2.62 4.435 5.442 8.768 7.861 13.303 4.031 7.492 7.122 16.226 5.577 24.793.772.504 1.007 1.579.638 2.385.033.067.1.134.134.168.269.336.538.638.806.974.639.672 1.21 1.243 2.05 1.713 2.52 1.344 5.24 2.117 8.029 2.553 4.434.672 8.97.571 13.437.874 4.502.302 9.104.638 13.64.067 3.728-.47 7.558-1.545 9.775-4.838.134-.201.302-.369.47-.503 0-.101 0-.27-.033-.37-.135-.504-.27-.974-.404-1.444-.302-1.042-.604-2.083-.806-3.158-.336-2.05-.067-4.468.336-6.517.504-2.386 1.344-5.073 3.561-6.417 1.915-1.176 3.998-1.78 6.215-1.982.37-.269.84-.437 1.377-.37 3.897.437 7.895.37 11.825.437 1.445.034 3.393.168 4.67-.672 1.612-1.075 2.083-2.788 2.25-4.636.202-2.015.303-4.3 1.445-6.08.706-1.075 1.512-2.016 2.352-2.99.84-.974 1.747-2.015 2.217-3.191.47-1.176 0-1.68-1.075-2.217-.504-.27-.773-.639-.907-1.042-.74-.974-.37-2.855 1.243-3.124 4.031-.672.873-4.031-.74-5.51-2.116-1.981-2.955-4.199-2.284-7.088 0-.033 0-.067.034-.1.067-.404.302-.807.739-1.11 2.284-1.578 5.745-1.41 8.365-1.948 1.041-.201 2.587-.604 3.09-1.276.303-.168.336-.134.236-.672zM58.386 68.229c-2.352-1.109-5.745.773-8.23.873-2.386.068-2.654-3.594-.27-3.695 3.427-.1 6.753-2.083 10.146-.47 2.15.974.504 4.3-1.646 3.292zm.638-21.231c-.403-.538-1.444-.706-2.015-.907a17.156 17.156 0 01-2.117-.975c-1.646-.94-3.158-2.049-4.737-3.124-1.982-1.344.504-4.098 2.453-2.788 1.814 1.243 3.594 2.62 5.677 3.426 1.478.572 2.856 1.008 3.83 2.318 1.41 1.882-1.68 3.93-3.09 2.05zM94.667 24.96c1.008-.773 1.277-3.662 1.58-4.905.402-1.511.873-3.762 2.653-4.266 2.184-.605 3.427 2.553 1.478 3.393-.033.067-.067.134-.134.302-.101.303-.202.639-.303.941-.235.907-.436 1.848-.705 2.755-.47 1.78-1.008 3.661-2.553 4.837-1.848 1.445-3.897-1.612-2.016-3.057zm-21.634-4.905c-.403-1.04.033-.067.235.236.403.638.403 1.276.134 1.78.403 1.109 1.143 2.117 1.714 3.192.806 1.478 1.511 2.956 1.579 4.669.1 2.385-3.561 2.654-3.696.269-.168-3.46-3.628-5.812-3.594-9.406.1-2.05 2.855-2.789 3.628-.74zm33.426 36.013c-2.486 6.786-8.735 12.094-8.768 19.619.201.268.336.638.336 1.075 0 .94-.37 1.68-.941 2.284.201.269.336.638.336 1.075.067 2.385-1.075 4.4-2.822 5.644.37.605.37 1.377-.269 2.05-1.915 1.914-3.762 3.258-6.584 2.62-2.352-.538-3.93-2.688-4.267-4.973-.033-.268-.033-.503.034-.705-1.041-.94-1.848-2.184-2.284-3.762a1.767 1.767 0 01.235-1.512 2.448 2.448 0 01-.1-1.21c-.303-.37-.404-.873-.236-1.478 1.243-4.434-2.856-7.66-5.812-10.313-3.158-2.822-6.147-5.912-7.894-9.843-3.125-6.987-1.176-15.05 5.173-19.45 8.768-6.048 23.818-5.107 31.074 3.09 3.93 4.468 4.804 10.246 2.789 15.789zm6.618-22.004c.84.134 2.284-2.284 2.788-2.923 1.041-1.31 2.318-2.586 4.098-2.687 2.385-.168 2.654 3.527.269 3.695-1.109.067-2.385 2.553-3.124 3.393-1.243 1.411-2.755 2.52-4.737 2.184-2.351-.437-1.646-4.065.706-3.662zm11.892 18.208c-3.326.201-6.786-.067-10.045.806-2.284.605-3.527-2.889-1.21-3.494 3.192-.84 6.45-.806 9.743-.94a1.64 1.64 0 011.68-.135c.168.068.302.101.47.168.336.168.571.403.773.74.672 1.142.033 2.788-1.411 2.855z"
          fill="#3498db"
        />
        <path
          d="M158.73 88.486c-.033 0-.033 0 0 0a1.808 1.808 0 00-.335-.672c-2.285-3.09-4.368-6.35-6.72-9.406-2.15-2.822-4.87-5.14-6.752-8.163-2.049-3.293-1.31-7.626-.537-11.22.84-3.998.269-8.097.537-12.162.034-.504-.1-.974-.37-1.31-1.31-8.734-7.49-16.662-13.47-22.844-5.342-5.543-11.96-9.775-19.149-12.496-14.479-5.51-30.536-4.804-45.318-1.008-4.232 1.075-8.398 2.486-12.463 4.098-.37-.033-.739.1-1.108.437-.034 0-.034.033-.068.033-.067.034-.134.068-.201.068-.504.201-.806.537-.974.94-2.957 2.453-6.047 4.67-8.936 7.223-3.46 3.057-6.08 6.786-8.298 10.817-4.636 8.331-6.752 17.906-7.727 27.312-.974 9.238 1.445 18.241 5.342 26.539 4.4 9.373 9.776 18.342 14.983 27.278 6.517 11.12 16.427 23.952 12.832 37.692-.235.94.202 1.613.874 1.915.134.47.37.974.672 1.377 1.545 2.184 3.426 3.73 5.845 4.838 5.845 2.721 12.127 2.52 18.41 2.889 5.475.336 10.951.873 16.46.37 4.838-.437 10.213-1.915 13.068-6.182.202-.336.336-.672.336-.974.47-.202.874-.605 1.042-1.21.37-1.276-.37-2.956-.74-4.165-.503-1.713-.638-3.158-.503-4.905.134-1.948.436-4.199 1.545-5.845 1.21-1.78 4.502-2.016 6.416-2.05.336 0 .605-.066.807-.2 4.132.369 8.432.402 12.564.335 4.804-.067 8.13-2.99 8.835-7.794.302-2.217.201-4.501 1.713-6.349 1.075-1.31 2.217-2.52 3.158-3.93 1.68-2.52 1.881-5.14.235-7.122 2.184-1.512 2.99-4.166 1.445-7.088-.773-1.479-1.949-2.587-3.158-3.662-.974-.874-1.344-1.613-1.243-2.721.168-.067.37-.101.605-.168.705-.168 1.511-.269 2.284-.403 1.881-.27 3.796-.538 5.61-1.143 1.545-.503 3.192-1.478 3.796-3.09.773-2.083-.168-4.132-1.344-5.88zm-95.574 65.508c.605-.067 1.042-.336 1.31-.706-.1.336-.436.639-1.31.706zm93.39-60.839c-.537.639-2.082 1.042-3.09 1.277-2.654.538-6.08.37-8.365 1.948-.436.303-.671.706-.739 1.11 0 .033-.033.066-.033.1-.672 2.889.168 5.106 2.284 7.088 1.58 1.478 4.737 4.871.74 5.51-1.647.268-1.983 2.15-1.244 3.124.135.403.403.772.907 1.041 1.075.538 1.546 1.042 1.075 2.217-.504 1.21-1.41 2.218-2.217 3.192-.84.974-1.646 1.915-2.351 2.99-1.143 1.78-1.243 4.064-1.445 6.08-.168 1.848-.638 3.561-2.25 4.636-1.277.84-3.226.705-4.67.672-3.93-.067-7.928 0-11.825-.437-.571-.067-1.042.1-1.378.37-2.217.201-4.3.806-6.215 1.982-2.217 1.343-3.057 4.03-3.56 6.416-.404 2.016-.706 4.468-.336 6.517.168 1.075.504 2.117.806 3.158.134.47.269.974.403 1.445.034.1.034.268.034.37-.168.1-.336.268-.47.503-2.218 3.292-6.048 4.367-9.777 4.838-4.501.57-9.103.235-13.639-.068-4.468-.302-9.003-.168-13.437-.873-2.822-.437-5.51-1.243-8.029-2.553-.84-.437-1.41-1.008-2.05-1.713a7.297 7.297 0 01-.805-.975c-.034-.067-.101-.134-.135-.168.336-.806.101-1.915-.638-2.385 1.579-8.566-1.545-17.3-5.577-24.792-2.418-4.535-5.274-8.869-7.86-13.303a721.822 721.822 0 01-8.03-14.042c-4.602-8.298-9.64-16.764-11.455-26.203-1.814-9.306-.067-19.25 2.721-28.186 1.814-5.778 4.602-11.522 8.5-16.192 3.56-4.266 8.364-7.256 12.563-10.85 13.908-5.644 29.429-8.634 44.479-6.283 7.457 1.176 14.546 3.796 20.895 7.895 7.055 4.569 12.765 11.254 17.065 18.41 1.714 2.855 3.057 5.979 3.494 9.305.034.336.168.604.303.84-.168 3.93.201 7.894-.605 11.757-.806 3.83-1.243 8.399.537 12.027 1.646 3.36 4.401 5.912 6.786 8.7 2.755 3.192 4.905 6.854 7.39 10.247.035.033.035.033.068.067.067.202.134.403.269.605.403.57.873 1.21 1.008 1.915.1.503.067.47-.101.671z"
          fill="#000"
        />
        <path
          d="M103.67 40.313c-7.256-8.197-22.306-9.138-31.074-3.091-6.383 4.4-8.298 12.463-5.173 19.45 1.747 3.931 4.703 7.022 7.894 9.844 2.956 2.654 7.055 5.879 5.812 10.313-.168.605-.034 1.108.235 1.478-.067.403-.067.806.1 1.21a1.767 1.767 0 00-.234 1.511c.436 1.579 1.243 2.822 2.284 3.763-.067.201-.067.436-.034.705.336 2.284 1.915 4.434 4.267 4.972 2.822.638 4.67-.706 6.584-2.62.639-.672.639-1.445.269-2.05 1.747-1.243 2.923-3.258 2.822-5.643 0-.437-.134-.807-.336-1.075.571-.605.94-1.344.94-2.285 0-.436-.134-.806-.335-1.075.067-7.525 6.315-12.833 8.768-19.618 2.015-5.577 1.142-11.355-2.789-15.79zM89.56 83.48c-1.78-.033-3.258-.772-4.165-2.082 2.285.504 4.535.57 6.92-.034l1.11-.302c.033.1.066.235.1.336-.504 1.545-2.284 2.116-3.964 2.082zm-1.175-20.39c-.1-.27-.168-.538-.269-.807-.873-2.486-1.948-5.207-3.292-7.66a10.197 10.197 0 001.58-.84c.402.672.873 1.31 1.645 1.781.571.37 1.21.504 1.881.538-.974 2.049-1.444 4.434-1.545 6.584v.403zm12.161-3.394c-3.225 5.409-6.82 10.213-6.55 16.83 0 .101 0 .169.033.27-.235.134-.47.268-.74.369-.772.336-1.612.57-2.451.772-.504-4.87-.874-9.708-2.285-14.411.706 1.444 3.427 1.008 3.527-1.008.101-2.352.874-5.173 2.654-6.786.538-.504.672-1.075.504-1.579.74-1.377-.302-3.46-2.049-2.687-.907.403-2.385 1.276-3.426.806-.504-.235-.975-1.881-1.243-2.352-.605-1.075-2.117-1.075-2.923-.235-.571.571-1.21 1.008-1.881 1.411a4.67 4.67 0 01-.941.403c-.235-.302-.504-.604-.739-.907-1.243-1.377-3.628.269-3.023 1.915.369.974.873 1.613 1.444 2.016.773 1.142 1.377 2.452 1.948 3.695.84 1.881 1.714 3.83 2.42 5.778 1.578 4.502 1.847 9.306 2.317 14.009a14.597 14.597 0 01-2.385-.605c2.217-8.634-8.096-13.37-12.295-19.316-2.419-3.427-3.561-7.525-2.453-11.624.773-2.889 2.89-5.14 5.375-6.719 4.57-2.889 10.549-3.225 15.756-2.15 4.77 1.008 9.91 3.662 11.926 8.332 1.982 4.77-.068 9.675-2.52 13.773zm25.8-10.28c-.201-.302-.437-.57-.773-.739-.168-.067-.302-.1-.47-.168-.638-.268-1.243-.168-1.68.135-3.258.134-6.55.1-9.742.94-2.318.605-1.075 4.099 1.21 3.494 3.258-.873 6.718-.605 10.044-.806 1.478-.067 2.117-1.713 1.411-2.856zm-6.383-20.962c-1.78.1-3.023 1.377-4.098 2.687-.538.672-1.949 3.091-2.788 2.923-2.352-.403-3.057 3.225-.706 3.628 1.982.336 3.494-.772 4.737-2.183.739-.84 2.049-3.326 3.124-3.393 2.419-.135 2.116-3.83-.269-3.662zM98.9 15.789c-1.747.504-2.25 2.755-2.654 4.266-.336 1.243-.571 4.133-1.579 4.905-1.881 1.445.168 4.535 2.083 3.057 1.512-1.176 2.05-3.057 2.553-4.837.235-.907.47-1.848.706-2.755.1-.336.168-.638.302-.94.067-.135.1-.236.134-.303 1.882-.84.639-4.031-1.545-3.393zm-23.75 9.473c-.572-1.04-1.345-2.049-1.714-3.19.269-.505.302-1.143-.134-1.781-.202-.303-.639-1.31-.236-.236-.772-2.049-3.56-1.276-3.594.74-.067 3.594 3.426 5.946 3.594 9.406.101 2.385 3.797 2.083 3.696-.269-.135-1.713-.807-3.225-1.613-4.67zM62.08 44.915c-.974-1.31-2.351-1.747-3.83-2.318-2.082-.806-3.863-2.184-5.677-3.427-1.948-1.31-4.4 1.445-2.452 2.789 1.579 1.041 3.09 2.183 4.737 3.124.671.37 1.377.705 2.116.974.605.235 1.613.37 2.016.907 1.444 1.915 4.535-.134 3.09-2.05zm-2.049 19.988c-3.393-1.579-6.719.37-10.145.47-2.385.068-2.083 3.763.268 3.696 2.486-.067 5.846-1.982 8.23-.874 2.15 1.042 3.797-2.284 1.647-3.292z"
          fill="#000"
        />
      </g>
    </svg>
  );
}

export default SkillIcon;