import httpRequest from '~/service'

const getAnnouncement = (data: any) => {
  return httpRequest.post('api/allAnnouncementTitles', data)
}

export { getAnnouncement }
