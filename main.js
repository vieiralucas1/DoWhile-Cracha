const LinksSocialMedia = {
  github: 'vieiralucas1',
  facebook: 'profile.php?id=100011513947810',
  youtube: 'channel/UCNTUjV_bnhSFdKJlKCrMeMw/featured',
  instagram: 'vieira.lucas1',
  twitter: 'LucasVi60585262'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
