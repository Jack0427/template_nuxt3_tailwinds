import httpRequest from '~/service'

const getAnnouncement = (params: any) => {
  return httpRequest.get('api/allAnnouncementTitles', params)
}

export { getAnnouncement }
